import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageResults = () => {
  return (
    <View style={styles.imageResults}>
      <Image
        source={require('../../../assets/images/home1.webp')}
        style={styles.imageResultItem}
      />

      <Image
        source={require('../../../assets/images/home2.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home3.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home4.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home5.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home6.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home7.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home8.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home1.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home2.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home3.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home4.webp')}
        style={styles.imageResultItem}
      />
      <Image
        source={require('../../../assets/images/home5.webp')}
        style={styles.imageResultItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageResults: {
    backgroundColor: '#212529',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  imageResultItem: {
    width: '49%',
    height: 250,
    resizeMode: 'cover',
    margin: 2,
  },
});

export default ImageResults;
