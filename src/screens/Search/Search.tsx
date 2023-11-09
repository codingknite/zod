import axios from 'axios';
import styles from './styles';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, ScrollView, Pressable} from 'react-native';
import RecentSearches from './components/RecentSearches';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = () => {
  const navigation = useNavigation();
  const textInputRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }, 100);
  }, []);

  const navigateHome = () => {
    navigation.goBack();
  };

  const handleSearch = async () => {
    if (searchText) {
      const resValidTld = await axios.post(
        'http://localhost:3000/api/valid-tld',
        {
          searchText: searchText,
        },
      );

      const textData = await resValidTld.data;

      if (textData.validLink) {
        const userId = await AsyncStorage.getItem('user-id');

        const addHistory = await axios.post(
          'http://localhost:3000/api/add-history',
          {
            userId,
            text: textData.link,
          },
        );

        const postRecentSearch = addHistory.data;
        if (postRecentSearch.message === 'SUCCESSFUL') {
          navigation.navigate('Webview', {
            link: textData.link,
          });
        }
      } else {
        const userId = await AsyncStorage.getItem('user-id');
        const resRecentSearch = await axios.post(
          'http://localhost:3000/api/add-history',
          {
            userId,
            text: searchText,
          },
        );

        const postRecentSearch = resRecentSearch.data;
        if (postRecentSearch.message === 'SUCCESSFUL') {
          navigation.navigate('SearchResults', {
            text: searchText,
          });
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <TextInput
            value={searchText}
            placeholder="Search the permaweb"
            placeholderTextColor="#adb5bd"
            style={styles.searchInput}
            ref={textInputRef}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            onSubmitEditing={handleSearch}
          />
          {searchText.length > 0 ? (
            <MaterialIcons
              name="cancel"
              size={20}
              color={colors.textGray}
              style={styles.cancelIcon}
              onPress={() => setSearchText('')}
            />
          ) : null}
        </View>
        <Pressable onPress={navigateHome}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </View>

      <View style={styles.searchesWrapper}>
        <ScrollView style={styles.recentSearchesContainer}>
          <RecentSearches />
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
