import React, {useState} from 'react';
import {colors} from '../../themes/colors';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import NavMenu from './components/Menu';

interface Props {
  toggleMenu: () => void;
}

const BottomNav = ({toggleMenu}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
      <Pressable onPress={toggleMenu}>
        <EntypoIcon
          size={25}
          color={colors.white.light}
          name="dots-three-horizontal"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 40,
    flexDirection: 'row',
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    backgroundColor: colors.gray.light,
  },
});

export default BottomNav;