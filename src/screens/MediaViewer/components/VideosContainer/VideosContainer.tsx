import React from 'react';
import VideoItem from './VideoItem';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export interface TxnProps {
  node: {
    id: string;
    tags: {
      name: string;
      value: string;
    }[];
    data: {
      size: string;
      type: string;
    };
  };
}
interface Props {
  data: TxnProps[];
  loadingData: boolean;
}

const DataLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" />
    </View>
  );
};

const VideosContainer = ({data, loadingData}: Props) => {
  if (loadingData) {
    return <DataLoading />;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        {data.map((vd, index) => (
          <VideoItem video={vd} key={index} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    paddingVertical: 25,
  },
  mainContainer: {
    gap: 10,
    padding: 10,
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewMoreContainer: {},
  viewMoreText: {},
});

export default VideosContainer;
