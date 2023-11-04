import React from 'react';
import {colors} from '../../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface ImageTxnProps {
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

interface ImageItemProps {
  image: ImageTxnProps;
}

const DataLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" />
    </View>
  );
};

const ImageItem = ({image}: ImageItemProps) => {
  const navigation = useNavigation();

  const handleViewImage = () => {
    navigation.navigate('ViewMedia', {
      transactionId: image.node.id,
    });
  };

  return (
    <Pressable style={styles.imageItemContainer} onPress={handleViewImage}>
      <View>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: `https://arweave.net/${image.node.id}`,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.imageCaption} numberOfLines={1}>
          {image.node.tags.map((tag, index) => {
            if (tag.name === 'Title') {
              return (
                <Text style={{color: '#fff'}} key={index}>
                  {tag.value}
                </Text>
              );
            }
          })}
        </Text>
      </View>
    </Pressable>
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

const styles = StyleSheet.create({
  loadingContainer: {
    paddingVertical: 50,
  },
  mainContainer: {
    gap: 10,
    padding: 10,
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageItemContainer: {
    width: '48%',
  },
  imageWrapper: {
    height: 220,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageCaption: {
    fontSize: 12,
    paddingTop: 8,
    fontWeight: '500',
    paddingBottom: 14,
  },

  viewMoreContainer: {
    width: '35%',
    marginVertical: 40,
    borderRadius: 32,
    alignSelf: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.blue.medium,
  },
  viewMoreText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white.light,
  },
});
export default ImagesContainer;
