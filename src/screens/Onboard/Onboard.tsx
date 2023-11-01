import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Pressable} from 'react-native';

const Onboard = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/onboard-logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.onboardContainer}>
        <Text style={styles.welcomeText}>Welcome to Zod</Text>
        <Text style={styles.secondaryText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nobis
          inventore error porro fugiat officia.
        </Text>

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Onboard;
