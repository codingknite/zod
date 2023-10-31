import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

interface Props {
  imageSource?: string;
  headline: string;
  date: string;
}
const NewsItem = ({headline, date}: Props) => {
  return (
    <View style={styles.container}>
      {/* most likely to be a uri */}
      <Image
        source={require('../../assets/images/news.webp')}
        style={styles.articleImage}
        resizeMode="cover"
      />
      <Text style={styles.headlineText}>{headline}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 65,
    backgroundColor: '#ffffff1b',
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
    lineHeight: 30,
    fontWeight: '600',
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
