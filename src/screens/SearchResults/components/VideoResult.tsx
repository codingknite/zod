import React from 'react';
import {colors} from '../../../themes/colors';
import {View, Image, Text, StyleSheet} from 'react-native';

const VideoResult = () => {
  return (
    <View style={styles.videoResults}>
      <View style={styles.videoResultItem}>
        <View>
          <Image
            source={require('../../../assets/images/home3.webp')}
            style={styles.thumbnail}
          />
          <Text style={styles.playTime}>4:37</Text>
        </View>

        <View style={styles.videoInfo}>
          <Text style={styles.videoName} numberOfLines={2}>
            Best of Lightning McQueen In Cars | Compilation | Welcome Home
          </Text>

          <View style={styles.udlInfo}>
            <Text style={styles.udlText}>License •</Text>
            <Text style={styles.udlText}> User</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoResults: {
    padding: 12,
    borderTopWidth: 0.5,
    borderColor: '#343a40',
  },
  thumbnail: {
    width: 175,
    height: 110,
  },
  videoResultItem: {
    flexDirection: 'row',
  },
  playTime: {
    backgroundColor: colors.gray.dark,
    position: 'absolute',
    top: '75%',
    left: '5%',
    fontSize: 12,
    padding: 2,
    paddingHorizontal: 5,
    color: colors.white.light,
    fontWeight: '600',
  },
  videoInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  videoName: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.white.light,
  },
  udlInfo: {
    flexDirection: 'row',
  },
  udlText: {
    color: colors.white.light,
  },
});

export default VideoResult;
