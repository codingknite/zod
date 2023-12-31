import React from 'react';
import {colors} from '../../themes/colors';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
interface Props {
  navValue?: string;
}
const TopNav = ({navValue}: Props) => {
  const navigation = useNavigation();

  const navigateToSearch = () => {
    navigation.push('Search');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          onPressIn={navigateToSearch}
          style={styles.searchBar}
          placeholder="Search or enter trasaction id"
          placeholderTextColor={colors.white.medium}
          autoFocus={false}
          editable={false}
          value={navValue ? navValue : ''}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchContainer: {
    width: '95%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.black.onboardScreen,
  },
  searchBar: {
    padding: 11,
    width: '90%',
    fontSize: 15,
    borderRadius: 10,
    fontWeight: '500',
    paddingHorizontal: 12,
    color: colors.white.medium,
  },
  logoContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 17,
    height: 17,
    alignSelf: 'center',
  },
});

export default TopNav;
