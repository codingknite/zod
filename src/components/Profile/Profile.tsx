import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';

interface Props {
  toggleProfile: () => void;
}

interface User {
  email: string;
  userId: string;
  password: string;
  fullName: string;
  walletAddress: string;
}

const Profile = ({toggleProfile}: Props) => {
  const navigation = useNavigation();
  const [userBalance, setBalance] = useState<string>();
  const [userInfo, setUserInfo] = useState<User>();
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setLoadingUser(true);
    const userId = await AsyncStorage.getItem('user-id');

    try {
      const response = await axios.post('http://localhost:3000/api/get-user', {
        userId,
      });
      const userData = response.data;

      if (userData.message === 'SUCCESSFUL') {
        setUserInfo(userData.user);
        setBalance(userData.userBalance);
        setLoadingUser(false);
      }
    } catch (error) {
      setLoadingUser(false);
    }
  };

  const handleSignout = async () => {
    await AsyncStorage.setItem('user-token', '');
    navigation.navigate('Onboard');
  };

  if (loadingUser) {
    return (
      <View style={styles.loadingContainer}>
        <Pressable onPress={toggleProfile} style={styles.toggleProfileLoading}>
          <Text style={styles.doneText}>Done</Text>
        </Pressable>

        <View style={styles.loadingActivity}>
          <ActivityIndicator color={colors.white.light} size="small" />
        </View>
      </View>
    );
  }

  const formatName = (string: string) => string.split(' ')[0];

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleProfile}>
        <Text style={styles.doneText}>Done</Text>
      </Pressable>

      <View style={styles.areaContainer}>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.username}>
            Hi {userInfo?.fullName && formatName(userInfo?.fullName)}!
          </Text>
          <Text style={styles.balanceHeader}>Your Balance</Text>
          <Text style={styles.balanceText}>
            {userBalance && userBalance.substring(0, 4)} AR
          </Text>
          <Text style={styles.address}>
            {userInfo?.walletAddress &&
              userInfo.walletAddress.substring(0, 12) +
                '.....' +
                userInfo.walletAddress.slice(-12)}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.buttonItem}>
            <MaterialIcons
              name="person-add"
              size={22}
              color={colors.white.light}
            />
            <Text style={styles.buttonText}>Add New Wallet</Text>
          </Pressable>

          <Pressable style={styles.buttonItem} onPress={handleSignout}>
            <MaterialIcons name="logout" size={20} color={colors.white.light} />
            <Text style={styles.buttonText}>Sign Out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Profile;
