import axios, {AxiosResponse} from 'axios';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {colors} from '../../themes/colors';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import NewsItem from '../../components/NewsItem';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavMenu from '../../components/BottomNav/components/Menu';
import BottomNav from '../../components/BottomNav';

type NewsItem = {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  'dc:creator': string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
};

interface FeedApiResponse {
  message: string;
  feed: Array<NewsItem>;
}

const Home = () => {
  const navigation = useNavigation();
  const [openMenu, setOpenMenu] = useState(false);
  const [loadingFeed, setLoadingFeed] = useState(false);
  const [newsFeed, setNewsFeed] = useState<NewsItem[]>([]);

  // get news feed
  useEffect(() => {
    fetchNewsFeed();
  }, []);

  const fetchNewsFeed = async () => {
    setLoadingFeed(true);
    try {
      const response: AxiosResponse<FeedApiResponse> = await axios.get(
        'http://localhost:3000/api/news-feed',
      );
      const feedData = response.data;

      if (feedData.message === 'SUCCESSFUL') {
        setNewsFeed(feedData.feed);
        setLoadingFeed(false);
      }
    } catch (error) {
      setLoadingFeed(false);
    }
  };

  const extractImageLink = (htmlContent: string) => {
    const imgTagRegex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/;
    const match = htmlContent.match(imgTagRegex);

    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const handleOpenMenu = () => {
    setOpenMenu(val => !val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput
            onPressIn={navigateToSearch}
            style={styles.searchBar}
            placeholder="Search or enter trasaction id"
            placeholderTextColor={colors.white.medium}
            autoFocus={false}
          />
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>
        </View>
      </View>

      <ImageBackground
        source={require('../../assets/images/home2.webp')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.primaryText}>ZOD</Text>

          <View style={styles.shortcutsContainer}>
            <Text style={styles.shortcutsText}>Shortcuts</Text>

            <View style={styles.shortcutItems}>
              <View style={styles.shortcutItem}>
                <View style={styles.shortCutIcon}>
                  <EntypoIcon name="star-outlined" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>Bookmarks</Text>
              </View>

              <View style={styles.shortcutItem}>
                <View style={styles.shortCutIcon}>
                  <EntypoIcon name="back-in-time" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>History</Text>
              </View>

              <View style={styles.shortcutItem}>
                <View style={styles.shortCutIcon}>
                  <EntypoIcon name="upload" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>Public Uploads</Text>
              </View>

              <View style={styles.shortcutItem}>
                <View style={styles.shortCutIcon}>
                  <MaterialCommunityIcon name="account" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>Profile</Text>
              </View>
            </View>
          </View>

          <View style={styles.newsContainer}>
            <Text style={styles.newsText}>Permaweb News</Text>

            {loadingFeed ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color={colors.white.light} />
              </View>
            ) : (
              <>
                {newsFeed.map((item, index) => (
                  <NewsItem
                    key={index}
                    link={item.link}
                    date={item.isoDate}
                    headline={item.title}
                    imageSource={extractImageLink(item.content)}
                  />
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </ImageBackground>

      {/* <View style={styles.bottomNav}>
        <Ionicon name="caret-back" size={25} color={colors.white.light} />
        <Ionicon name="caret-forward" size={25} color={colors.white.light} />
        <Pressable
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Ionicon name="search-outline" size={25} color={colors.white.light} />
        </Pressable>
        <MaterialIcon
          name="all-inclusive-box-outline"
          size={25}
          color={colors.white.light}
        />
        <EntypoIcon
          name="dots-three-horizontal"
          size={25}
          color={colors.white.light}
        />
      </View> */}

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

export default Home;

// todo convert textinput to text
// this is because this is not where we are recording user input
