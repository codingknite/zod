import React, {useState} from 'react';
import styles from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [validationState, setValidationState] = useState({
    invalidEmail: false,
    userNotFound: false,
    invalidInputInfo: false,
    invalidCredentials: false,
  });
  const [loadingLogin, setLoadingLogin] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setLoadingLogin(true);

    if (!userInfo.email && !userInfo.password) {
      setValidationState({
        ...validationState,
        invalidEmail: false,
        userNotFound: false,
        invalidInputInfo: true,
        invalidCredentials: false,
      });
      setLoadingLogin(false);
    } else {
      const validEmail = validateEmail(userInfo.email);

      if (validEmail) {
        const loginUser = await axios.post('http://localhost:3000/api/login', {
          email: userInfo.email,
          password: userInfo.password,
        });

        const data = await loginUser.data;

        if (data.message === 'SUCCESSFUL LOGIN') {
          await AsyncStorage.setItem('user-id', data.userId);
          await AsyncStorage.setItem('user-token', data.token);
          const userToken = await AsyncStorage.getItem('user-token');

          if (userToken) {
            navigation.navigate('Home');
            setLoadingLogin(false);
          }
        } else if (data.message === 'WRONG CREDENTIALS') {
          setValidationState({
            ...validationState,
            invalidEmail: false,
            userNotFound: false,
            invalidInputInfo: false,
            invalidCredentials: true,
          });
          setUserInfo({
            ...userInfo,
            email: '',
            password: '',
          });
          setLoadingLogin(false);
        } else {
          setValidationState({
            ...validationState,
            userNotFound: true,
            invalidEmail: false,
            invalidInputInfo: false,
            invalidCredentials: false,
          });
          setLoadingLogin(false);
        }
      } else {
        setValidationState({
          ...validationState,
          invalidEmail: true,
          userNotFound: false,
          invalidInputInfo: false,
          invalidCredentials: false,
        });
        setUserInfo({
          ...userInfo,
          email: '',
        });
        setLoadingLogin(false);
      }
    }
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
          <Text style={styles.emailText}>* Email Address</Text>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor="#adb5bd"
            style={[
              styles.formInput,
              validationState.invalidEmail && styles.invalidStyles,
              validationState.invalidCredentials && styles.invalidStyles,
            ]}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            textContentType="none"
            onChangeText={text => {
              setUserInfo({
                ...userInfo,
                email: text,
              });
            }}
            value={userInfo.email}
          />
          <MaterialIcon
            name="email"
            style={styles.mailIcon}
            size={26}
            color={colors.white.light}
          />

          <Text style={styles.passwordText}>* Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#adb5bd"
            style={[
              styles.formInput,
              validationState.invalidCredentials && styles.invalidStyles,
            ]}
            secureTextEntry={true}
            onChangeText={text => {
              setUserInfo({
                ...userInfo,
                password: text,
              });
            }}
            value={userInfo.password}
          />
          <MaterialIcon
            name="lock"
            style={styles.lockIcon}
            size={26}
            color={colors.white.light}
          />
        </View>

        {validationState.invalidEmail ? (
          <Text style={styles.fillFieldsText}>
            Invalid Email. Enter Valid Email Address
          </Text>
        ) : validationState.invalidInputInfo ? (
          <Text style={styles.fillFieldsText}>
            Fill In All Required Fields (*)
          </Text>
        ) : validationState.invalidCredentials ? (
          <Text style={styles.fillFieldsText}>
            Invalid Credentials. Please Try Again
          </Text>
        ) : validationState.userNotFound ? (
          <Text style={styles.fillFieldsText}>
            User not found. Signup to create account
          </Text>
        ) : null}

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          {loadingLogin ? (
            <ActivityIndicator size="small" color={colors.white.light} />
          ) : (
            <Text style={styles.loginButtonText}>Continue</Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
