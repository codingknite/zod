import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../themes/colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const getUserToken = async () => {
      const token = await AsyncStorage.getItem('user-token');

      if (token) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Onboard');
      }
    };

    getUserToken();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/onboard-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black.onboardScreen,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
