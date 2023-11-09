import React, {useEffect, useState} from 'react';
import styles from './styles';
import TopNav from '../../components/TopNav';
import searchBarStyles from '../Home/styles';
import BottomNav from '../../components/BottomNav';
import VideosContainer from './components/VideosContainer';
import NavMenu from '../../components/BottomNav/components/NavMenu';
import ImagesContainer from './components/ImagesContainer/ImagesContainer';

import {Pressable} from 'react-native';
import {colors} from '../../themes/colors';
import axios, {AxiosResponse} from 'axios';
import {useRoute} from '@react-navigation/native';
import {View, Text, TextInput, ScrollView} from 'react-native';
import setPostData from '../../utils/setPostData';

interface QueryDataProps {
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

interface ApiResponseProps {
  count: number;
  message: string;
  data: Array<QueryDataProps>;
}

type MediaCategoryProps = 'videos' | 'images';

const MediaViewer = () => {
  const route = useRoute();
  const {mediaType} = route.params;

  const [mediaCategory, setMediaCategory] =
    useState<MediaCategoryProps>(mediaType);
  const [openMenu, setOpenMenu] = useState(false);

  const [userInput, setUserInput] = useState('');
  const [loadingImageData, setLoadingImageData] = useState(false);
  const [loadingVideoData, setLoadingVideoData] = useState(false);

  const [imagesData, setImagesData] = useState<Array<QueryDataProps>>([]);
  const [videosData, setVideosData] = useState<Array<QueryDataProps>>([]);

  useEffect(() => {
    setMediaCategory(mediaType);
  }, [mediaType]);

  const fetchMedia = async () => {
    if (mediaCategory === 'images') {
      setLoadingImageData(true);
    } else {
      setLoadingVideoData(true);
    }

    try {
      const apiData = setPostData(userInput, mediaCategory);

      const queryResponse: AxiosResponse<ApiResponseProps> = await axios.post(
        'http://localhost:3000/api/query-media',
        apiData,
      );
      const responseData = queryResponse.data;

      if (responseData.data) {
        if (mediaCategory === 'images') {
          setImagesData(responseData.data);
          setLoadingImageData(false);
        } else {
          setVideosData(responseData.data);
          setLoadingVideoData(false);
        }
      }
    } catch (error) {
      setLoadingImageData(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [mediaCategory]);

  const handleOpenMenu = () => {
    setOpenMenu(val => !val);
  };

  return (
    <View style={searchBarStyles.container}>
      <TopNav navValue={`arweave-search.goldsky.com?c=${mediaCategory}`} />

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mediaTypeContainer}>
          <Pressable
            onPress={() => {
              if (!loadingVideoData) {
                setUserInput('');
                setMediaCategory('images');
              }
            }}>
            <Text
              style={[
                styles.mediaType,
                mediaCategory === 'images' ? styles.selectedMedia : {},
              ]}>
              Images
            </Text>
            {mediaCategory === 'images' ? (
              <View style={styles.mediaUnderline} />
            ) : null}
          </Pressable>

          <Pressable
            onPress={() => {
              if (!loadingImageData) {
                setUserInput('');
                setMediaCategory('videos');
              }
            }}>
            <Text
              style={[
                styles.mediaType,
                mediaCategory === 'videos' ? styles.selectedMedia : {},
              ]}>
              Videos
            </Text>
            {mediaCategory === 'videos' ? (
              <View style={styles.mediaUnderline} />
            ) : null}
          </Pressable>
        </View>

        <View style={styles.zodContainer}>
          <Text style={styles.zodText}>ZOD</Text>
          <Text style={styles.imagesText}>{mediaCategory}</Text>
        </View>

        <TextInput
          value={userInput}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={text => {
            setUserInput(text);
          }}
          onSubmitEditing={fetchMedia}
          placeholderTextColor={colors.textGray}
          placeholder="Search or enter transaction id"
        />

        {mediaCategory === 'images' ? (
          <ImagesContainer data={imagesData} loadingData={loadingImageData} />
        ) : (
          <VideosContainer data={videosData} loadingData={loadingVideoData} />
        )}
      </ScrollView>

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

export default MediaViewer;
