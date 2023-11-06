import styles from './styles';
import React, {useEffect, useState, useCallback} from 'react';
import {Pressable} from 'react-native';
import {colors} from '../../themes/colors';
import {useRoute} from '@react-navigation/native';
import {View, Text, TextInput, ScrollView} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import searchBarStyles from '../Home/styles';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import ImagesContainer from './components/ImagesContainer/ImagesContainer';
import NavMenu from '../../components/BottomNav/components/Menu';
import Video from 'react-native-video';

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
  const [loadingData, setLoadingData] = useState(false);
  const [queryData, setQueryData] = useState<Array<QueryDataProps>>([]);
  const [queryDataCount, setQueryDataCount] = useState<number>(0);

  const handleSubmit = useCallback(async () => {
    setLoadingData(true);

    try {
      let postData;

      if (!userInput) {
        postData = {
          mediaType,
          gateway: '',
        };
      } else {
        const isTransactionId = userInput.length === 43;

        if (isTransactionId) {
          postData = {
            mediaType,
            gateway: '',
            transactionId: userInput.trim(),
          };
        } else {
          postData = {
            mediaType,
            gateway: '',
            searchString: userInput.trim(),
          };
        }
      }

      const queryResponse: AxiosResponse<ApiResponseProps> = await axios.post(
        'http://localhost:3000/api/query-arweave',
        postData,
      );

      const responseData = queryResponse.data;

      if (responseData) {
        setQueryData(responseData.data);
        setQueryDataCount(responseData.count);
        setLoadingData(false);
      }
    } catch (error) {
      setLoadingData(false);
    }
  }, [userInput]);

  useEffect(() => {
    handleSubmit();
  }, [mediaType]);

  const handleUserInput = (text: string) => {
    setUserInput(text);
  };

  const handleOpenMenu = () => {
    setOpenMenu(val => !val);
  };

  return (
    <View style={searchBarStyles.container}>
      <TopNav />
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mediaTypeContainer}>
          <Pressable onPress={() => setMediaCategory('images')}>
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

          <Pressable onPress={() => setMediaCategory('videos')}>
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

        <View>
          <View style={styles.zodContainer}>
            <Text style={styles.zodText}>ZOD</Text>
            <Text style={styles.imagesText}>{mediaCategory}</Text>
          </View>

          <TextInput
            placeholder="Search or Enter transaction id"
            style={styles.textInput}
            placeholderTextColor={colors.textGray}
            onChangeText={handleUserInput}
            onSubmitEditing={handleSubmit}
            autoCapitalize="none"
            autoComplete="off"
            value={userInput}
          />

          {queryDataCount === 0 ? (
            <Text
              style={[
                styles.mediaType,
                mediaCategory === 'images' ? styles.selectedMedia : {},
              ]}>
              No Results Try Again
            </Text>
          ) : (
            <>
              {mediaCategory === 'images' ? (
                <ImagesContainer data={queryData} loadingData={loadingData} />
              ) : (
                <Video
                  source={{
                    uri: 'https://arweave.net/vWmEPKJWE6eRzQBJQ_TwELNjSY0-umSu-cNTaeCRZUc',
                  }}
                  muted
                  repeat
                  style={styles.videoContainer}
                />
              )}
            </>
          )}
        </View>
      </ScrollView>

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

export default MediaViewer;
