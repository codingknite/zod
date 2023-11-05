import React, {useState} from 'react';
import searchBarStyles from '../Home/styles';
import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import BottomNav from '../../components/BottomNav';
import VideoResult from '../SearchResults/components/VideoResult';
import NavMenu from '../../components/BottomNav/components/Menu';

const VideoRenderer = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(val => !val);
  };

  return (
    <View style={searchBarStyles.container}>
      <View style={searchBarStyles.searchContainer}>
        <View style={searchBarStyles.searchBarWrapper}>
          <TextInput
            // onPressIn={navigateToSearch}
            style={searchBarStyles.searchBar}
            placeholder="Search or enter trasaction id"
            placeholderTextColor={colors.white.medium}
            autoFocus={false}
          />
          <View style={searchBarStyles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={searchBarStyles.logo}
            />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentWrapper}>
        <View style={styles.contentArea}>
          <View style={styles.zodContainer}>
            <Text style={styles.zodText}>ZOD</Text>
            <Text style={styles.videosText}>Videos</Text>
          </View>

          <TextInput
            placeholder="Enter transaction id or tag"
            style={styles.textInput}
            placeholderTextColor={colors.textGray}
          />

          <View style={styles.videosWrapper}>
            <VideoResult />
            <VideoResult />
            <VideoResult />
            <VideoResult />
            <VideoResult />
            <VideoResult />
          </View>
        </View>
      </ScrollView>

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  contentArea: {
    backgroundColor: colors.black.onboardScreen,
  },
  zodContainer: {
    paddingVertical: 25,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zodText: {
    fontSize: 50,
    fontWeight: '600',
    color: colors.white.light,
  },
  videosText: {
    position: 'absolute',
    top: 122,
    left: '55%',
    paddingVertical: 1,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 32,
    fontSize: 14.5,
    fontWeight: '400',
    borderWidth: 1.2,
    borderColor: colors.textGray,
    marginVertical: 10,
    color: colors.white.light,
  },
  videosWrapper: {
    marginTop: 20,
  },
  image: {
    width: '32%',
    height: 150,
  },
  contentWrapper: {
    backgroundColor: colors.black.onboardScreen,
  },
});

export default VideoRenderer;
