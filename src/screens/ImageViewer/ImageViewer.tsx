import styles from './styles';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {colors} from '../../themes/colors';
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

const ImageViewer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [customInput, setCustomInput] = useState({
    name: '',
    value: '',
  });
  const [addAppName, setAddAppName] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [queryData, setQueryData] = useState<Array<QueryDataProps>>([]);

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

  const handleSubmit = async () => {
    setLoadingData(true);

    try {
      let postData;

      if (!userInput) {
        postData = {
          gateway: '',
        };
      } else {
        const isTransactionId = userInput.length === 43;

        if (isTransactionId) {
          postData = {
            transactionId: userInput.trim(),
            gateway: '',
          };
        } else {
          postData = {
            titleTag: userInput.trim(),
            gateway: '',
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
  };

  const searchCustomTags = async () => {
    setLoadingData(true);

    try {
      if (customInput.name && customInput.value) {
        const postData = {
          gateway: '',
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
        style={styles.testContainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.zodContainer}>
            <Text style={styles.zodText}>ZOD</Text>
            <Text style={styles.imagesText}>Images</Text>
          </View>

          <TextInput
            placeholder="Enter transaction id or image title"
            style={styles.textInput}
            placeholderTextColor={colors.textGray}
            onChangeText={handleUserInput}
            onSubmitEditing={handleSubmit}
            editable={!addAppName}
            autoCapitalize="none"
            autoComplete="off"
            value={userInput}
          />

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

          {addAppName ? (
            <Pressable style={[styles.submitCustom]} onPress={searchCustomTags}>
              <Text style={styles.infoText}>Search Images</Text>
            </Pressable>
          ) : null}

          <ImagesContainer data={queryData} loadingData={loadingData} />
        </View>
      </ScrollView>
      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

export default ImageViewer;

// Collection-Code mfer-collection
// Collection-Code mf
