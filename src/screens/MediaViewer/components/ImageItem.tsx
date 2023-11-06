import React from 'react';
import styles from './ImagesContainer/styles';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Pressable} from 'react-native';
import {ImageTxnProps} from './ImagesContainer/ImagesContainer';

interface ImageItemProps {
  image: ImageTxnProps;
}

const ImageItem = ({image}: ImageItemProps) => {
  const navigation = useNavigation();

  const handleViewImage = () => {
    navigation.navigate('ViewMedia', {
      transactionId: image.node.id,
      mediaType: 'image',
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

export default ImageItem;
