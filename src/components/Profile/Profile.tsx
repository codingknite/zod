import React from 'react';
import styles from './styles';
import {View, Text, Pressable, ScrollView, SafeAreaView} from 'react-native';

interface Props {
  toggleProfile: () => void;
}

const Profile = ({toggleProfile}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={toggleProfile}>
        <Text style={styles.doneText}>Done</Text>
      </Pressable>

      <ScrollView
        style={styles.areaContainer}
        showsVerticalScrollIndicator={false}>
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

export default Profile;
