import React, {useState} from 'react';
import Video, {OnLoadData} from 'react-native-video';
import {TxnProps} from './VideosContainer';
import {colors} from '../../../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface VideoItemProps {
  video: TxnProps;
}

const VideoItem = ({video}: VideoItemProps) => {
  const navigation = useNavigation();
  const [videoDuration, setVideoDuration] = useState<number>(0);

  const viewMedia = () => {
    navigation.navigate('ViewMedia', {
      transactionId: video.node.id,
      mediaType: 'video',
    });
  };

  const onVideoLoad = (data: OnLoadData) => {
    setVideoDuration(data.duration);
  };

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    let formattedDuration = '';

    if (hours > 0) {
      formattedDuration += `${hours}:`;
    }

    formattedDuration += `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return formattedDuration;
  };

  return (
    <Pressable style={styles.videoItemContainer} onPress={viewMedia}>
      <View style={styles.videoResultItem}>
        <View style={styles.videoContainer}>
          <Video
            muted
            repeat
            paused
            resizeMode="cover"
            onLoad={data => onVideoLoad(data)}
            style={styles.videoPlayer}
            source={{
              uri: `https://g8way.io/${video.node.id}`,
            }}
          />
          <Text style={styles.playTime}>{formatDuration(videoDuration)}</Text>
        </View>

        <View style={styles.videoInfo}>
          {video.node.tags.map((tag, index) => {
            if (tag.name === 'Title') {
              return (
                <Text style={styles.videoName} numberOfLines={2} key={index}>
                  {tag.value}
                </Text>
              );
            }
          })}

          <View style={styles.udlInfo}>
            <Text style={styles.udlText}>License •</Text>
            <Text style={styles.udlText}> User</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  videoItemContainer: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#343a40',
  },
  videoResultItem: {
    width: '95%',
    paddingTop: 12,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  videoContainer: {
    width: 160,
    height: 100,
    borderRadius: 5,
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: colors.gray.light,
  },
  playTime: {
    left: '5%',
    top: '75%',
    padding: 2,
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 5,
    position: 'absolute',
    color: colors.white.light,
    backgroundColor: colors.black.onboardScreen,
  },
  videoInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  videoName: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white.light,
  },
  udlInfo: {
    flexDirection: 'row',
  },
  udlText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.white.light,
  },
});

export default VideoItem;
