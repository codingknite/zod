import React from 'react';
import styles from './styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, Pressable, ScrollView} from 'react-native';

interface Props {
  category: 'google' | 'permaweb' | 'images' | 'videos' | 'documents';
}

const SearchResult = ({category}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultHeader}>
        <View style={styles.resultInfo}>
          <View style={styles.resultIcon}>
            <FontistoIcon name="world-o" color="#fff" size={22} />
          </View>

          <View style={styles.resultAddress}>
            <Text style={styles.addressName}>cars.com</Text>
            <Text style={styles.address} ellipsizeMode="tail" numberOfLines={1}>
              https://arweave.net/LnP2BL-bXHLoCqdx0NYpWTfQ9bZqFgkZK8ETATt56Xo
            </Text>
          </View>
        </View>

        <Pressable style={styles.stamps}>
          {category === 'google' ? (
            <FontAwesomeIcon
              name="file-upload"
              size={16}
              style={styles.stampIcon}
            />
          ) : (
            <FontAwesomeIcon name="stamp" size={16} style={styles.stampIcon} />
          )}
          <Text style={styles.stampText}>
            {category === 'google' ? 'Upload' : 'Stamp'}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.resultText} numberOfLines={2}>
        New Cars, Used Cars, Car Dealers, Prices & Reviews
      </Text>

      <Text style={styles.resultDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        facilis illum mollitia perferendis odio nam dolorum, provident sint
        molestias quos!
      </Text>

      <ScrollView
        style={styles.tagsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.tag}>Cars for Sale</Text>
        <Text style={styles.tag}>Automotive</Text>
        <Text style={styles.tag}>Welcome</Text>
        <Text style={styles.tag}>Arweave</Text>
        <Text style={styles.tag}>ArConnect</Text>
        <Text style={styles.tag}>25 Stamps</Text>
        <Text style={styles.tag}>Cars for Sale</Text>
        <Text style={styles.tag}>Automotive</Text>
        <Text style={styles.tag}>Welcome</Text>
        <Text style={styles.tag}>Arweave</Text>
        <Text style={styles.tag}>ArConnect</Text>
      </ScrollView>
    </View>
  );
};

export default SearchResult;
