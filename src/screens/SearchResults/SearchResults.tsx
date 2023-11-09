import styles from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../themes/colors';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Profile from '../../components/Profile';
import TopNav from '../../components/TopNav';
import axios from 'axios';
import BottomNav from '../../components/BottomNav';
import PageResult from './components/PageResult';
import ImagesContainer from '../MediaViewer/components/ImagesContainer';
import VideosContainer from '../MediaViewer/components/VideosContainer';
import NavMenu from '../../components/BottomNav/components/NavMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CategoryProps = 'pages' | 'images' | 'videos' | 'documents';
interface Transaction {
  node: {
    id: string;
    tags: {
      name: string;
      value: string;
    }[];
    data: {
      size: string;
      type: string;
    };
  };
}

interface SearchDataProps {
  images: Transaction[];
  videos: Transaction[];
  pages: Transaction[];
}

const SearchResults = () => {
  const route = useRoute();

  const {text} = route.params;

  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [currentCategory, setCurrentCategory] =
    useState<CategoryProps>('pages');

  const [searchInputText, setSearchInputText] = useState(text);
  const [searchData, setSearchData] = useState<SearchDataProps>({
    images: [],
    videos: [],
    pages: [],
  });
  const [loadingState, setLoadingState] = useState({
    pages: false,
    images: false,
    videos: false,
    documents: false,
  });

  useEffect(() => {
    setSearchInputText(text);
    fetchData(text);
  }, [text]);

  useEffect(() => {
    fetchData(searchInputText);
  }, [onSubmit]);

  const onSubmit = async () => {
    const userId = await AsyncStorage.getItem('user-id');

    const addHistory = await axios.post(
      'http://localhost:3000/api/add-history',
      {
        userId,
        text: searchInputText,
      },
    );

    const postRecentSearch = addHistory.data;

    if (postRecentSearch.message === 'SUCCESSFUL') {
      fetchData(searchInputText);
    }
  };

  const fetchData = async (txt: string) => {
    if (searchInputText) {
      setLoadingState({
        ...loadingState,
        [currentCategory]: true,
      });

      try {
        const response = await axios.post(
          'http://localhost:3000/api/search-arweave',
          {
            text: txt,
          },
        );

        const apiData = response.data;

        if (apiData.message === 'SUCCESSFUL') {
          setSearchData({
            images: apiData.images,
            videos: apiData.videos,
            pages: apiData.pages,
          });
          setLoadingState({
            ...loadingState,
            [currentCategory]: false,
          });
        }
      } catch (error) {
        setLoadingState({
          ...loadingState,
          [currentCategory]: false,
        });
      }
    }
  };

  const toggleProfile = () => {
    setOpenProfile(val => !val);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <View style={styles.container}>
      <TopNav navValue="arweave-search.goldsky.com?app=zod" />

      <ScrollView style={styles.contentArea}>
        <View style={styles.headerSection}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.zodText}>ZOD</Text>
          <Pressable onPress={toggleProfile}>
            <IonIcon
              name="person-circle"
              color={colors.white.light}
              size={35}
            />
          </Pressable>
        </View>

        <TextInput
          value={searchInputText}
          style={styles.searchBar}
          onChangeText={txt => {
            setSearchInputText(txt);
          }}
          onSubmitEditing={onSubmit}
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <IonIcon
          name="search-outline"
          size={24}
          color="#fff"
          style={styles.searchIcon}
        />
        {searchInputText.length > 0 ? (
          <MaterialIcons
            name="cancel"
            size={20}
            color={colors.textGray}
            style={styles.cancelIcon}
            onPress={() => setSearchInputText('')}
          />
        ) : null}

        <View style={styles.resultCategories}>
          <Pressable
            onPress={() => {
              setCurrentCategory('pages');
            }}>
            {currentCategory === 'pages' ? (
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryActive}>Pages</Text>
              </View>
            ) : (
              <Text style={styles.categoryText}>Pages</Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => {
              setCurrentCategory('images');
            }}>
            {currentCategory === 'images' ? (
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryActive}>Images</Text>
              </View>
            ) : (
              <Text style={styles.categoryText}>Images</Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => {
              setCurrentCategory('videos');
            }}>
            {currentCategory === 'videos' ? (
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryActive}>Videos</Text>
              </View>
            ) : (
              <Text style={styles.categoryText}>Videos</Text>
            )}
          </Pressable>
        </View>

        <View>
          {currentCategory === 'pages' ? (
            <>
              {loadingState.pages ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color="#fff" />
                </View>
              ) : (
                <>
                  {searchData.pages.map((data, index) => (
                    <PageResult
                      id={data.node.id}
                      tags={data.node.tags}
                      key={index}
                    />
                  ))}
                </>
              )}
            </>
          ) : currentCategory === 'images' ? (
            <>
              <ImagesContainer
                data={searchData.images}
                loadingData={loadingState.images}
              />
            </>
          ) : currentCategory === 'videos' ? (
            <>
              {searchData.videos.length === 0 ? (
                <Text style={{color: '#fff'}}>No Results :/</Text>
              ) : (
                <VideosContainer
                  data={searchData.videos}
                  loadingData={loadingState.videos}
                />
              )}
            </>
          ) : null}
        </View>
      </ScrollView>

      {openMenu ? (
        <NavMenu toggleMenu={handleOpenMenu} />
      ) : openProfile ? (
        <Profile toggleProfile={toggleProfile} />
      ) : (
        <BottomNav toggleMenu={handleOpenMenu} />
      )}
    </View>
  );
};

export default SearchResults;
