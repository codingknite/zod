import styles from './styles';
import React, {useState} from 'react';
import Profile from '../../../Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, ScrollView, SafeAreaView} from 'react-native';
import History from '../History';

interface Props {
  toggleMenu: () => void;
}

const NavMenu = ({toggleMenu}: Props) => {
  const navigation = useNavigation();

  const [openProfile, setOpenProfile] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    toggleMenu();
  };

  const toggleHistory = () => {
    setOpenHistory(!openHistory);
    toggleMenu();
  };

  return (
    <>
      {openProfile ? (
        <Profile toggleProfile={toggleProfile} />
      ) : openHistory ? (
        <History toggleHistory={toggleHistory} />
      ) : (
        <SafeAreaView style={styles.container}>
          <Pressable onPress={toggleMenu} style={styles.doneTextWrapper}>
            <Text style={styles.doneText}>Done</Text>
          </Pressable>

          <ScrollView style={styles.menuContainer}>
            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setOpenProfile(true);
              }}>
              <View style={styles.infoWrapper}>
                <MaterialIcons name="account-circle" size={19} color="#fff" />
                <Text style={styles.menuItemText}>Profile</Text>
              </View>
              <Text style={styles.menuItemDescription}>
                Quick access to your account information
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate('MediaViewer', {
                  mediaType: 'images',
                });
              }}>
              <View style={styles.infoWrapper}>
                <Entypo name="camera" size={18} color="#fff" />
                <Text style={styles.menuItemText}>Zod Images</Text>
              </View>
              <Text style={styles.menuItemDescription}>
                Browse images and atomic assets on the permaweb
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate('MediaViewer', {
                  mediaType: 'videos',
                });
              }}>
              <View style={styles.infoWrapper}>
                <Entypo name="video-camera" size={18} color="#fff" />
                <Text style={styles.menuItemText}>Zod Videos</Text>
              </View>
              <Text style={styles.menuItemDescription}>
                Browse videos on the permaweb
              </Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setOpenHistory(true);
              }}>
              <View style={styles.infoWrapper}>
                <MaterialCommunityIcons name="history" size={19} color="#fff" />
                <Text style={styles.menuItemText}>History</Text>
              </View>
              <Text style={styles.menuItemDescription}>
                Your browsing history
              </Text>
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.infoWrapper}>
                <MaterialCommunityIcons
                  name="bookmark"
                  size={18}
                  color="gray"
                />
                <Text style={[styles.menuItemText, styles.bookmarksGrayed]}>
                  Bookmarks
                </Text>
              </View>
              <Text
                style={[styles.menuItemDescription, styles.bookmarksGrayed]}>
                Your bookmarks across the permaweb
              </Text>
            </Pressable>

            <View style={styles.menuItem} />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default NavMenu;
