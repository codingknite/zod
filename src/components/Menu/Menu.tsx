import React from 'react';
import styles from './styles';
import {View, Text, Pressable, ScrollView, SafeAreaView} from 'react-native';

interface Props {
  toggleProfile: () => void;
}

const Menu = ({toggleProfile}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={toggleProfile}>
        <Text style={styles.doneText}>Done</Text>
      </Pressable>

      <View style={styles.areaContainer}>
        <Text>News</Text> {/** COMPONENT */}
        <Text>History</Text> {/** COMPONENT */}
        <Text>Bookmarks</Text> {/** COMPONENT */}
        <Text>Permaweb Images</Text> {/** SCREEN */}
        <Text>Permaweb Videos</Text> {/** SCREEN */}
        <Text>Public Uploads</Text> {/** COMPONENT */}
      </View>
    </SafeAreaView>
  );
};

export default Menu;
