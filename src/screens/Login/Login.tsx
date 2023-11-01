import React from 'react';
import styles from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Pressable, SafeAreaView} from 'react-native';

// todo set email address value to lowercase

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // todo: this is a temporary workaround
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.loginHeader}>
          <Pressable onPress={() => navigation.navigate('Onboard')}>
            <AntIcon name="arrowleft" size={26} color={colors.white.medium} />
          </Pressable>
          <Text style={styles.loginText}>Login</Text>
          <View />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.emailText}>Email Address</Text>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
            autoCapitalize="none"
            textContentType="none"
          />
          <MaterialIcon
            name="email"
            style={styles.mailIcon}
            size={26}
            color={colors.white.light}
          />

          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
            secureTextEntry={true}
          />
          <MaterialIcon
            name="lock"
            style={styles.lockIcon}
            size={26}
            color={colors.white.light}
          />
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.googleAuthContainer}>
        <Text style={styles.continueWithText}>or continue with</Text>
        <Pressable style={styles.googleAuthButton}>
          <AntIcon name="google" size={26} color={colors.white.light} />
          <Text style={styles.googleAuthText}>Login with Google</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

// todo: implement authentication with continue button
