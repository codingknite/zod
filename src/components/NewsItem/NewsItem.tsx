import React from 'react';
import {Text, Image, StyleSheet, Pressable} from 'react-native';
import {colors} from '../../themes/colors';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

interface Props {
  imageSource: string | null;
  headline: string;
  date: string;
  link: string;
}
const NewsItem = ({headline, date, imageSource, link}: Props) => {
  const navigation = useNavigation();

  const openArticle = () => {
    navigation.navigate('Webview', {
      link,
    });
  };

  return (
    <Pressable style={styles.container} onPress={openArticle}>
      <Image
        source={{
          uri: imageSource
            ? imageSource
            : 'https://logowik.com/content/uploads/images/arweave-ar7674.jpg',
        }}
        style={styles.articleImage}
        resizeMode="cover"
      />
      <Text style={styles.headlineText}>{headline}</Text>
      <Text style={styles.date}>{format(new Date(date), 'LLLL dd, yyyy')}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 65,
    backgroundColor: '#000000a9',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  articleImage: {
    width: '100%',
    height: 250,
  },
  headlineText: {
    padding: 10,
    fontSize: 22,
    fontWeight: '700',
    color: colors.white.light,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 10,
    color: colors.white.medium,
    paddingVertical: 12,
  },
});

export default NewsItem;
