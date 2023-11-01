import React from 'react';
import loginStyles from '../Login/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import {colors} from '../../themes/colors';

const Signup = () => {
  const navigation = useNavigation();

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
          <Text style={loginStyles.emailText}>Full Name</Text>
          <TextInput
            placeholder="Enter Full Name"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
            autoCapitalize="none"
            textContentType="none"
          />
          <MaterialIcon
            name="person-4"
            size={26}
            style={styles.personIcon}
            color={colors.white.medium}
          />

          <Text style={loginStyles.emailText}>Email Address</Text>
          <TextInput
            placeholder="Enter Email Address"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
            autoCapitalize="none"
            textContentType="none"
          />
          <MaterialIcon
            name="email"
            size={26}
            style={styles.mailIcon}
            color={colors.white.medium}
          />

          <Text style={loginStyles.passwordText}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#adb5bd"
            style={styles.formInput}
            secureTextEntry={true}
          />
          <MaterialIcon
            name="lock"
            size={26}
            style={styles.lockIcon}
            color={colors.white.medium}
          />
        </View>

        <Pressable style={loginStyles.loginButton}>
          <Text style={loginStyles.loginButtonText}>Continue</Text>
        </Pressable>
      </View>

      <View style={loginStyles.googleAuthContainer}>
        <Text style={loginStyles.continueWithText}>or continue with</Text>
        <Pressable style={loginStyles.googleAuthButton}>
          <AntIcon name="google" size={26} color={colors.white.light} />
          <Text style={loginStyles.googleAuthText}>Login with Google</Text>
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
    top: 60,
    left: 15,
  },
  mailIcon: {
    position: 'absolute',
    top: 173,
    left: 15,
  },
  lockIcon: {
    position: 'absolute',
    top: 298,
    left: 15,
  },
});
export default Signup;
