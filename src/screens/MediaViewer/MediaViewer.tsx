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
import ImagesContainer from './components/ImagesContainer';
import NavMenu from '../../components/BottomNav/components/Menu';

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
  message: string;
  query: string;
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
  const [customInput, setCustomInput] = useState({
    name: '',
    value: '',
  });
  const [addAppName, setAddAppName] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [queryData, setQueryData] = useState<Array<QueryDataProps>>([]);
  // const [videoQueryData, setVideoQueryData] = useState<Array<QueryDataProps>>([]);

  const handleSubmit = useCallback(async () => {
    setLoadingData(true);

    try {
      let postData;

      if (!userInput) {
        postData = {
          gateway: '',
          mediaType,
        };
      } else {
        const isTransactionId = userInput.length === 43;

        if (isTransactionId) {
          postData = {
            transactionId: userInput.trim(),
            gateway: '',
            mediaType,
          };
        } else {
          postData = {
            titleTag: userInput.trim(),
            gateway: '',
            mediaType,
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
        setLoadingData(false);
      }
    } catch (error) {
      setLoadingData(false);
    }
  }, [userInput]);

  const searchCustomTags = async () => {
    setLoadingData(true);

    try {
      if (customInput.name && customInput.value) {
        const postData = {
          gateway: '',
          mediaType,
          customTagName: customInput.name.trim(),
          customTagValue: customInput.value.trim(),
        };

        const queryResponse: AxiosResponse<ApiResponseProps> = await axios.post(
          'http://localhost:3000/api/query-arweave',
          postData,
        );

        const responseData = queryResponse.data;

        if (responseData) {
          setQueryData(responseData.data);
          setLoadingData(false);
        }
      }
    } catch (error) {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [mediaType]);

  const handleUserInput = (text: string) => {
    setUserInput(text);
  };

  const handleCustomName = (text: string) => {
    setCustomInput({
      ...customInput,
      name: text,
    });
  };

  const handleCustomValue = (text: string) => {
    setCustomInput({
      ...customInput,
      value: text,
    });
  };

  const handleAddAppName = () => {
    setUserInput('');
    setAddAppName(val => !val);
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
            placeholder={`Enter transaction id or ${
              mediaCategory === 'images' ? 'image' : 'video'
            } title`}
            style={styles.textInput}
            placeholderTextColor={colors.textGray}
            onChangeText={handleUserInput}
            onSubmitEditing={handleSubmit}
            editable={!addAppName}
            autoCapitalize="none"
            autoComplete="off"
            value={userInput}
          />

          {mediaCategory === 'videos' ? null : (
            <>
              <Pressable
                style={[styles.addCustom, addAppName && styles.specialStyles]}
                onPress={handleAddAppName}>
                <Text style={styles.infoText}>Add Custom Tag</Text>
              </Pressable>

              <View style={styles.additionalInfo}>
                {addAppName ? (
                  <>
                    <TextInput
                      autoComplete="off"
                      placeholder="Name"
                      autoCapitalize="none"
                      value={customInput.name}
                      onSubmitEditing={handleSubmit}
                      style={styles.customInputField}
                      onChangeText={handleCustomName}
                      placeholderTextColor={colors.textGray}
                    />
                    <TextInput
                      autoComplete="off"
                      placeholder="Value"
                      autoCapitalize="none"
                      value={customInput.value}
                      onSubmitEditing={handleSubmit}
                      style={styles.customInputField}
                      onChangeText={handleCustomValue}
                      placeholderTextColor={colors.textGray}
                    />
                  </>
                ) : null}
              </View>
            </>
          )}

          {addAppName ? (
            <Pressable style={[styles.submitCustom]} onPress={searchCustomTags}>
              <Text style={styles.infoText}>
                Searches {mediaCategory === 'images' ? 'Images' : 'Videos'}
              </Text>
            </Pressable>
          ) : null}

          {mediaCategory === 'images' ? (
            <ImagesContainer data={queryData} loadingData={loadingData} />
          ) : (
            <Text>Show Video Here</Text>
          )}
        </View>
      </ScrollView>

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

export default MediaViewer;
