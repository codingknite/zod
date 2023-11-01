import React, {useEffect, useRef} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {View, Text, TextInput, ScrollView, Pressable} from 'react-native';
import {recentSearches} from '../../assets/data/recentSearches';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }, 100);
  }, []);

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search or enter address"
          placeholderTextColor="#adb5bd"
          style={styles.searchInput}
          ref={textInputRef}
        />
        <Pressable onPress={navigateHome}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.recentSearchesContainer}>
        <RecentSearches />
      </ScrollView>
    </View>
  );
};

const RecentSearches = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SearchResults');
  };

  return (
    <>
      <View style={styles.recentSearchesHeader}>
        <Text style={styles.searchesText}>Recent Searches</Text>
        <Text style={styles.clearText}>Clear</Text>
      </View>

      {recentSearches.map((item, index) => (
        <Pressable
          style={styles.searchItemContainer}
          key={index}
          onPress={handlePress}>
          <Text style={styles.searchItemText}>{item}</Text>
          <MaterialIcon name="arrow-outward" size={22} color="#615cf9" />
        </Pressable>
      ))}
    </>
  );
};

export default Search;

// todo: add cancel icon to erase text -> add during implementation
