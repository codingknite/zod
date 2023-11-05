import React from 'react';
import styles from '../Home/styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/colors';
import {WebView} from 'react-native-webview';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, TextInput, Image, Pressable} from 'react-native';

interface Props {
  url: string;
}

const Webview = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {link} = route.params;

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput
            onPressIn={navigateToSearch}
            style={styles.searchBar}
            placeholder="Search or enter trasaction id"
            placeholderTextColor={colors.white.medium}
            autoFocus={false}
            value={link}
          />
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>
        </View>
      </View>

      <View style={styles.testingWebView}>
        <WebView
          source={{
            uri: link,
          }}
          style={styles.webview}
        />
      </View>

      <View style={styles.bottomNav}>
        <Ionicon name="caret-back" size={25} color={colors.white.light} />
        <Ionicon name="caret-forward" size={25} color={colors.white.light} />
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
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

export default Webview;
