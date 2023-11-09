import axios from 'axios';
import styles from '../styles';
import React, {useState, useEffect, Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Pressable, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RecentSearches = () => {
  const navigation = useNavigation();

  const [loadingData, setLoadingData] = useState(false);
  const [recentSearchesData, setRecentSearchesData] = useState<Array<string>>(
    [],
  );

  const fetchRecentSearches = async () => {
    try {
      setLoadingData(true);

      const userId = await AsyncStorage.getItem('user-id');

      const response = await axios.post(
        'http://localhost:3000/api/get-recent-history',
        {
          userId,
        },
      );

      const data = response.data;

      if (data.message === 'SUCCESSFUL') {
        // todo do typechecking for this stuff

        setRecentSearchesData(data.data.searches.reverse());
        setLoadingData(false);
      }
    } catch (error) {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchRecentSearches();
  }, []);

  const handlePress = (text: string) => {
    navigation.navigate('SearchResults', {text});
  };

  const clearSeaches = async () => {
    const userId = await AsyncStorage.getItem('user-id');

    await axios.post('http://localhost:3000/api/delete-recent-history', {
      userId,
    });
  };

  const isWebLink = (input: string) => {
    const urlRegex =
      /^(http|https):\/\/[^ "]+|^[\w.]+[^ "]*\.[A-Za-z]{2,3}(\/.*)?$/;
    return urlRegex.test(input);
  };

  return (
    <>
      <View style={styles.recentSearchesHeader}>
        <Text style={styles.searchesText}>Recent Searches</Text>
        <Pressable onPress={clearSeaches}>
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
      </View>

      {loadingData ? (
        <View>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      ) : (
        <>
          {recentSearchesData.map((item, index) => (
            <Fragment key={index}>
              {isWebLink(item) ? null : (
                <Pressable
                  style={styles.searchItemContainer}
                  onPress={() => handlePress(item)}>
                  <Text style={styles.searchItemText}>{item}</Text>
                  <MaterialIcons
                    name="arrow-outward"
                    size={22}
                    color="#615cf9"
                  />
                </Pressable>
              )}
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default RecentSearches;
