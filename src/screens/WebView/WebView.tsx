import React, {useState} from 'react';
import styles from '../Home/styles';
import {colors} from '../../themes/colors';
import {WebView} from 'react-native-webview';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import NavMenu from '../../components/BottomNav/components/Menu';
import BottomNav from '../../components/BottomNav';

const Webview = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [openMenu, setOpenMenu] = useState(false);

  const {link} = route.params;

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const handleOpenMenu = () => {
    setOpenMenu(val => !val);
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

      <View style={screenStyles.webviewContainer}>
        <WebView
          source={{
            uri: link,
          }}
        />
      </View>

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

const screenStyles = StyleSheet.create({
  webviewContainer: {
    flex: 1,
  },
});

export default Webview;
