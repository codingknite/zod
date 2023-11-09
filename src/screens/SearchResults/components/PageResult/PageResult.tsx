import React from 'react';
import styles from './styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, ScrollView} from 'react-native';

interface Props {
  id: string;
  tags: {
    name: string;
    value: string;
  }[];
}

const PageResult = ({tags, id}: Props) => {
  const navigation = useNavigation();

  const excludedTags = [
    'Init-State',
    'Title',
    'Description',
    'Type',
    'Timestamp',
    'Signing-Client-Version',
    'Content-Type',
    'Contract-Src',
  ];

  const handleVisitPage = () => {
    navigation.navigate('Webview', {
      link: `https://arweave.net/${id}`,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleVisitPage}>
      <View style={styles.resultHeader}>
        <View style={styles.resultInfo}>
          <View style={styles.resultIcon}>
            <FontistoIcon name="world-o" color="#fff" size={18} />
          </View>

          <View style={styles.resultAddress}>
            <Text style={styles.address} ellipsizeMode="tail" numberOfLines={1}>
              {`https://arweave.net/${id}`}
            </Text>
          </View>
        </View>
      </View>

      {tags.map((tag, index) => {
        if (tag.name === 'Title') {
          return (
            <Text style={styles.resultText} numberOfLines={2} key={index}>
              {tag.value}
            </Text>
          );
        }
      })}

      {tags.map((tag, index) =>
        tag.name === 'Description' ? (
          <Text style={styles.resultDescription} key={index}>
            {tag.value}
          </Text>
        ) : null,
      )}

      <ScrollView
        style={styles.tagsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <>
          {tags.map((tag, index) => {
            if (excludedTags.includes(tag.name)) {
              return null;
            } else {
              return (
                <View style={styles.tag} key={index}>
                  <Text style={styles.tagName}>{tag.name}: </Text>
                  <Text style={styles.tagValue}>{tag.value}</Text>
                </View>
              );
            }
          })}
        </>
      </ScrollView>
    </Pressable>
  );
};

export default PageResult;
