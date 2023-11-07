import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Pressable} from 'react-native';

interface Props {
  toggleMenu: () => void;
}

const BottomNav = ({toggleMenu}: Props) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const caretColor = canGoBack ? colors.white.light : '#6c757d';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (canGoBack) {
            navigation.goBack();
          }
        }}>
        <Ionicon size={24} name="caret-back" color={caretColor} />
      </Pressable>
      <Pressable
        onPress={() => {
          const canGoBack = navigation.canGoBack();
        }}>
        <Ionicon name="caret-forward" size={25} color={colors.white.light} />
      </Pressable>
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
