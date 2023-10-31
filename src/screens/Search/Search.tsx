import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {View, Text, TextInput, ScrollView, Pressable} from 'react-native';
import {recentSearches} from '../../assets/data/recentSearches';

const RecentSearches = () => {
  return (
    <>
      <View style={styles.recentSearchesHeader}>
        <Text style={styles.searchesText}>Recent Searches</Text>
        <Text style={styles.clearText}>Clear</Text>
      </View>

      {recentSearches.map((item, index) => (
        <View style={styles.searchItemContainer} key={index}>
          <Text style={styles.searchItemText}>{item}</Text>
          <MaterialIcon name="arrow-outward" size={22} color="#615cf9" />
        </View>
      ))}
    </>
  );
};

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search or enter address"
          placeholderTextColor="#adb5bd"
          style={styles.searchInput}
        />
        <Pressable>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.recentSearchesContainer}>
        <RecentSearches />
      </ScrollView>
    </View>
  );
};

export default Search;

// todo: add cancel icon to erase text -> add during implementation
