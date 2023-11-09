import axios from 'axios';
import React, {useState} from 'react';
import loginStyles from '../Login/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../themes/colors';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);
  const [invalidUserInfo, setInvalidUserInfo] = useState(false);
  const [emailAlreadyUsed, setEmailAlreadyUsed] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    setLoadingSignup(true);

    if (userInfo.fullName && userInfo.email && userInfo.password) {
      const emailValid = validateEmail(userInfo.email);

      if (emailValid) {
        const addUser = await axios.post('http://localhost:3000/api/signup', {
          email: userInfo.email,
          fullName: userInfo.fullName,
          password: userInfo.password,
        });

        const data = await addUser.data;

        if (data.message === 'SUCCESSFUL SIGNUP') {
          await AsyncStorage.setItem('user-id', data.userId);
          await AsyncStorage.setItem('user-token', data.token);
          const userToken = await AsyncStorage.getItem('user-token');

          if (userToken) {
            setLoadingSignup(false);
            navigation.navigate('Home');
          }
        } else if (data.message === 'USER EXISTS') {
          setEmailAlreadyUsed(true);
          setUserInfo({...userInfo, email: ''});
          setLoadingSignup(false);
        }
      } else {
        setInvalidEmail(true);
        setUserInfo({...userInfo, email: ''});
        setLoadingSignup(false);
      }
    } else {
      setInvalidUserInfo(true);
      setLoadingSignup(false);
    }
  };

  return (
    <SafeAreaView style={loginStyles.mainContainer}>
      <View style={loginStyles.loginContainer}>
        <View style={loginStyles.loginHeader}>
          <Pressable onPress={() => navigation.navigate('Onboard')}>
            <AntIcon name="arrowleft" size={26} color={colors.white.medium} />
          </Pressable>
          <Text style={loginStyles.loginText}>Signup</Text>
          <View />
        </View>

        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.emailText}>* Full Name</Text>
          <TextInput
            placeholder="Enter Full Name"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            textContentType="none"
            onChangeText={text => {
              setUserInfo({
                ...userInfo,
                fullName: text,
              });
            }}
            value={userInfo.fullName}
          />
          <MaterialIcon
            name="person-4"
            size={26}
            style={styles.personIcon}
            color={colors.white.medium}
          />

          <Text style={loginStyles.emailText}>* Email Address</Text>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor="#adb5bd"
            style={[
              styles.formInput,
              invalidEmail || emailAlreadyUsed ? styles.invalidEmail : {},
            ]}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            textContentType="none"
            keyboardType="email-address"
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
            size={26}
            style={styles.mailIcon}
            color={colors.white.medium}
          />

          <Text style={loginStyles.passwordText}>* Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
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
            size={26}
            style={styles.lockIcon}
            color={colors.white.medium}
          />
        </View>

        {invalidEmail ? (
          <Text style={styles.fillFieldsText}>
            Invalid Email. Enter Valid Email Address
          </Text>
        ) : invalidUserInfo ? (
          <Text style={styles.fillFieldsText}>
            Fill In All Required Fields (*)
          </Text>
        ) : emailAlreadyUsed ? (
          <Text style={styles.fillFieldsText}>Email Address Already Used</Text>
        ) : null}

        <Pressable style={loginStyles.loginButton} onPress={handleSignup}>
          {loadingSignup ? (
            <ActivityIndicator size="small" color={colors.white.light} />
          ) : (
            <Text style={loginStyles.loginButtonText}>Continue</Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formInput: {
    ...loginStyles.formInput,
    fontSize: 16,
  },
  personIcon: {
    position: 'absolute',
    left: 15,
    top: 57.5,
  },
  mailIcon: {
    position: 'absolute',
    left: 15,
    top: 168.5,
  },
  lockIcon: {
    position: 'absolute',
    left: 15,
    top: 285.5,
  },
  fillFieldsText: {
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 12,
    color: colors.errorRed,
  },
  invalidEmail: {
    borderColor: colors.errorRed,
  },
});
export default Signup;
