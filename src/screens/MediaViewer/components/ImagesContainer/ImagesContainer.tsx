import React from 'react';
import styles from './styles';
import ImageItem from '../ImageItem';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';

export interface ImageTxnProps {
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
  loadingData: boolean;
  data: ImageTxnProps[];
}

const DataLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" />
    </View>
  );
};

const ImagesContainer = ({loadingData, data}: Props) => {
  if (loadingData) {
    return <DataLoading />;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        {data.map(image => (
          <ImageItem image={image} key={image.node.id} />
        ))}
      </View>

      {data.length < 100 ? null : (
        <Pressable style={styles.viewMoreContainer}>
          <Text style={styles.viewMoreText}>View More</Text>
        </Pressable>
      )}
    </>
  );
};

export default ImagesContainer;
