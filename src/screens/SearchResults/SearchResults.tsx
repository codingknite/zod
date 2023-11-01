import React, {useState} from 'react';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import VideoResult from './components/VideoResult';
import ImageResults from './components/ImageResults';
import SearchResult from '../../components/SearchResult';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Octicon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import Profile from '../../components/Profile';

type CategoryProps = 'google' | 'permaweb' | 'images' | 'videos' | 'documents';

interface ResultsProps {
  category: CategoryProps;
}
const GoogleResults = ({category}: ResultsProps) => {
  return (
    <>
      <SearchResult category={category} />
      <SearchResult category={category} />
      <SearchResult category={category} />
      <SearchResult category={category} />
      <SearchResult category={category} />
      <SearchResult category={category} />
      <SearchResult category={category} />
    </>
  );
};

const SearchResults = () => {
  const navigation = useNavigation();
  const [openProfile, setOpenProfile] = useState(false);
  const [currentCategory, setCurrentCategory] =
    useState<CategoryProps>('google');

  const openNewTab = () => {
    // for now just navigate home
    navigation.navigate('Home');
  };

  const toggleProfile = () => {
    setOpenProfile(val => !val);
  };

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
          <Pressable onPress={toggleProfile}>
            <IonIcon
              name="person-circle"
              color={colors.white.light}
              size={35}
            />
          </Pressable>
        </View>

        <TextInput value="Search Bar" style={styles.searchBar} />
        <IonIcon
          name="search-outline"
          size={24}
          color="#fff"
          style={styles.searchIcon}
        />

        <View style={styles.resultCategories}>
          <Pressable
            onPress={() => {
              setCurrentCategory('google');
            }}>
            {currentCategory === 'google' ? (
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryActive}>Google</Text>
              </View>
            ) : (
              <Text style={styles.categoryText}>Google</Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => {
              setCurrentCategory('permaweb');
            }}>
            {currentCategory === 'permaweb' ? (
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryActive}>Permaweb</Text>
              </View>
            ) : (
              <Text style={styles.categoryText}>Permaweb</Text>
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

          <Pressable
            onPress={() => {
              setCurrentCategory('documents');
            }}>
            {currentCategory === 'documents' ? (
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryActive}>Documents</Text>
              </View>
            ) : (
              <Text style={styles.categoryText}>Documents</Text>
            )}
          </Pressable>
        </View>

        <View>
          {currentCategory === 'google' || currentCategory === 'permaweb' ? (
            <GoogleResults category={currentCategory} />
          ) : currentCategory === 'images' ? (
            <>
              <ImageResults />
            </>
          ) : currentCategory === 'videos' ? (
            <>
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
              <VideoResult />
            </>
          ) : null}
        </View>
      </ScrollView>

      {openProfile ? (
        <Profile toggleProfile={toggleProfile} />
      ) : (
        <View style={styles.bottomNav}>
          <IonIcon name="caret-back" size={25} color={colors.white.light} />
          <IonIcon name="caret-forward" size={25} color={colors.white.light} />
          <Pressable onPress={openNewTab}>
            <Octicon name="plus" size={25} color={colors.white.light} />
          </Pressable>
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
      )}
    </View>
  );
};

export default SearchResults;
