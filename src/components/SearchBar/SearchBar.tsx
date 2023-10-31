import React from 'react';
import {colors} from '../../themes/colors';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBarWrapper}>
        <TextInput
          value="https://arweave.net/LnP2BL-bXHLoCqdx0NYpWTfQ9bZqFgkZK8ETATt56Xo"
          style={styles.searchBar}
          placeholder="Search or enter trasaction id"
          placeholderTextColor={colors.white.medium}
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
  searchContainer: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchBarWrapper: {
    width: '95%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.gray.dark,
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
export default SearchBar;
