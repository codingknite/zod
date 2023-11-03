import React from 'react';
import {colors} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import SearchBar from '../../components/SearchBar';

const Profile = () => {
  const navigation = useNavigation();

  const previousScreen = () => {
    // navigate to the most recent tab;
    navigation.navigate('SearchResults');
  };

  return (
    <SafeAreaView style={styles.areaContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Pressable onPress={previousScreen}>
          <Text style={styles.doneText}>Done</Text>
        </Pressable>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.username}>Hi Joel!</Text>
          <Text style={styles.balanceHeader}>Your Balance</Text>
          <Text style={styles.balanceText}>128.45 AR</Text>
          <Text style={styles.address}>DtMWM_WGNO8....x2aizSDoYZJo0</Text>
        </View>

        <Text style={styles.uploadsHeader}>Data You've Uploaded</Text>

        <View style={styles.uploadsContainer}>
          <UploadItem />
          <UploadItem />
          <UploadItem />
          <UploadItem />
          <UploadItem />
          <UploadItem />
          <UploadItem />
          <UploadItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const UploadItem = () => {
  return (
    <View style={styles.uploadItem}>
      <View style={styles.uploadTitleContainer}>
        <Text style={styles.uploadTitle} numberOfLines={2}>
          Title of uploaded document
        </Text>
        <Text style={styles.uploadPrice}>AR 10.1</Text>
      </View>

      <View style={styles.metaInfo}>
        <View style={styles.ansInfoContainer}>
          <Text style={styles.tag} numberOfLines={1}>
            Real Madrid
          </Text>
          <Text style={styles.tag} numberOfLines={1}>
            Video
          </Text>
        </View>

        <View style={styles.dateInfo}>
          <Text style={styles.dateText}>Oct 20, 2023</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  areaContainer: {
    backgroundColor: colors.gray.light,
  },
  container: {
    height: '100%',
    backgroundColor: colors.gray.dark,
  },
  doneText: {
    padding: 10,
    fontSize: 15,
    paddingRight: 15,
    fontWeight: '500',
    textAlign: 'right',
    color: colors.blue.medium,
  },
  profileInfoContainer: {
    paddingHorizontal: 12,
  },
  username: {
    fontSize: 26,
    fontWeight: '700',
    paddingVertical: 10,
    color: colors.white.medium,
  },
  balanceHeader: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
    color: colors.textGray,
  },
  balanceText: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: '700',
    color: '#adb5bd',
  },
  address: {
    marginTop: 8,
    fontSize: 12.5,
    color: '#e9ecef',
  },
  uploadsHeader: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
    paddingVertical: 5,
    paddingHorizontal: 12,
    color: colors.textGray,
  },
  uploadsContainer: {},
  uploadItem: {
    marginBottom: 10,
    padding: 10,
    paddingBottom: 15,
    backgroundColor: '#16161a',
  },
  uploadTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  uploadTitle: {
    fontSize: 17.5,
    width: '80%',
    fontWeight: '500',
    color: colors.white.light,
  },
  uploadPrice: {
    width: '20%',
    textAlign: 'right',
    fontSize: 17.5,
    fontWeight: '500',
    color: colors.white.light,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ansInfoContainer: {
    gap: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight: '500',
    borderWidth: 0.75,
    borderRadius: 5,
    color: colors.textGray,
    borderColor: colors.primary,
    maxWidth: 130,
  },
  dateInfo: {},
  dateText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textGray,
  },
});

export default Profile;
