import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import Profile from '../../Profile';

interface Props {
  toggleMenu: () => void;
}

const NavMenu = ({toggleMenu}: Props) => {
  const navigation = useNavigation();
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    toggleMenu();
  };

  return (
    <>
      {openProfile ? (
        <Profile toggleProfile={toggleProfile} />
      ) : (
        <SafeAreaView style={styles.container}>
          <Pressable onPress={toggleMenu}>
            <Text style={styles.doneText}>Done</Text>
          </Pressable>

          <ScrollView style={styles.menuContainer}>
            <Pressable
              style={styles.menuItem}
              onPress={() => {
                setOpenProfile(true);
              }}>
              <Text style={styles.menuItemText}>Profile ↗</Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate('MediaViewer', {
                  mediaType: 'images',
                });
              }}>
              <Text style={styles.menuItemText}>Zod Images ↗</Text>
            </Pressable>

            <Pressable
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate('MediaViewer', {
                  mediaType: 'videos',
                });
              }}>
              <Text style={styles.menuItemText}>Zod Videos ↗</Text>
            </Pressable>

            <View style={styles.menuItem} />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '45%',
    backgroundColor: colors.black.secondary,
  },
  doneText: {
    padding: 10,
    fontSize: 15,
    paddingRight: 15,
    fontWeight: '500',
    textAlign: 'right',
    color: colors.blue.medium,
    paddingVertical: 14,
  },
  menuContainer: {},
  menuItem: {
    borderTopWidth: 1,
    borderColor: colors.gray.light,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '600',
    padding: 15,
    paddingVertical: 16,
    color: colors.white.light,
  },
});

export default NavMenu;
