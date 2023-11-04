import React from 'react';
import searchBarStyles from '../Home/styles';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {StyleSheet, Pressable} from 'react-native';
import {colors} from '../../themes/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoResult from '../SearchResults/components/VideoResult';

const VideoRenderer = () => {
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

      <View style={searchBarStyles.bottomNav}>
        <Ionicon name="caret-back" size={25} color={colors.white.light} />
        <Ionicon name="caret-forward" size={25} color={colors.white.light} />
        <Pressable
          onPress={() => {
            // navigation.navigate('Home');
          }}>
          <AntDesignIcon name="plus" size={25} color={colors.white.light} />
        </Pressable>
        <MaterialIcon
          name="all-inclusive-box-outline"
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
