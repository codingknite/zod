import React from 'react';
import {colors} from '../../themes/colors';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SearchResults = () => {
  return (
    <View style={styles.container}>
      <SearchBar />

      <ScrollView style={styles.contentArea}>
        <View>
          <Image source={require('../../assets/images/logo.png')} />
          <Text>Zod</Text>
          <IonIcon name="person-circle" color={colors.white.light} size={36} />
        </View>

        <TextInput value="hello world" />

        <View>
          <Text>All</Text>
          <Text>Images</Text>
          <Text>Videos</Text>
          <Text>Document</Text>
        </View>

        <View>{/* SEARCH RESULT VIEW ITEM  */}</View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <IonIcon name="caret-back" size={25} color={colors.white.light} />
        <IonIcon name="caret-forward" size={25} color={colors.white.light} />
        <IonIcon name="search-outline" size={25} color={colors.white.light} />
        <MaterialIcon
          name="all-inclusive-box-outline"
          size={25}
          color={colors.white.light}
        />
        <EntypoIcon
          name="dots-three-horizontal"
          size={25}
          color={colors.white.light}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'space-between',
    backgroundColor: colors.gray.light,
  },
  contentArea: {
    backgroundColor: colors.gray.dark,
  },
  bottomNav: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    backgroundColor: colors.gray.light,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 10,
  },
});

export default SearchResults;
