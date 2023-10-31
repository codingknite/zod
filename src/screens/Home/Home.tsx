import React from 'react';
import styles from './styles';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {testNews} from '../../assets/data';
import {colors} from '../../themes/colors';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import NewsItem from '../../components/NewsItem';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search or enter trasaction id"
            placeholderTextColor={colors.white.medium}
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
                  <EntypoIcon name="upload" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>Transactions</Text>
              </View>

              <View style={styles.shortcutItem}>
                <View style={styles.shortCutIcon}>
                  <EntypoIcon name="tablet-mobile-combo" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>Recent Tabs</Text>
              </View>

              <View style={styles.shortcutItem}>
                <View style={styles.shortCutIcon}>
                  <EntypoIcon name="back-in-time" size={25} />
                </View>
                <Text style={styles.shortcutItemText}>History</Text>
              </View>
            </View>
          </View>

          <View style={styles.newsContainer}>
            <Text style={styles.newsText}>Permaweb News</Text>

            {testNews.map(item => (
              <NewsItem
                key={item.id}
                headline={item.headline}
                date={item.date}
              />
            ))}
          </View>
        </ScrollView>
      </ImageBackground>

      <View style={styles.bottomNav}>
        <Ionicon name="caret-back" size={25} color={colors.white.light} />
        <Ionicon name="caret-forward" size={25} color={colors.white.light} />
        <Ionicon name="search-outline" size={25} color={colors.white.light} />
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
      </View>
    </View>
  );
};

export default Home;
