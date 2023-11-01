import React from 'react';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import VideoResult from './components/VideoResult';
import ImageResults from './components/ImageResults';
import SearchResult from '../../components/SearchResult';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/colors';
import {View, ScrollView, Text, Image, TextInput} from 'react-native';

const GoogleResults = () => {
  return (
    <>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </>
  );
};

const SearchResults = () => {
  return (
    <View style={styles.container}>
      <SearchBar />

      <ScrollView style={styles.contentArea}>
        <View style={styles.headerSection}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.zodText}>ZOD</Text>
          <IonIcon name="person-circle" color={colors.white.light} size={35} />
        </View>

        <TextInput value="Search Bar" style={styles.searchBar} />
        <IonIcon
          name="search-outline"
          size={24}
          color="#fff"
          style={styles.searchIcon}
        />

        <View style={styles.resultCategories}>
          <View style={styles.categoryWrapper}>
            <Text style={styles.categoryActive}>Google</Text>
          </View>

          <Text style={styles.categoryText}>Permaweb</Text>
          <Text style={styles.categoryText}>Images</Text>
          <Text style={styles.categoryText}>Videos</Text>
          <Text style={styles.categoryText}>Documents</Text>
        </View>

        <GoogleResults />
      </ScrollView>

      <View style={styles.bottomNav}>
        <IonIcon name="caret-back" size={25} color={colors.white.light} />
        <IonIcon name="caret-forward" size={25} color={colors.white.light} />
        <IonIcon name="search-outline" size={25} color={colors.white.light} />
        <MaterialIcon
          name="all-inclusive-box"
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

export default SearchResults;
