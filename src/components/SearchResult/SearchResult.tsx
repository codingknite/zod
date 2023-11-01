import React from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../../themes/colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const SearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.resultHeader}>
        <View style={styles.resultInfo}>
          <View style={styles.resultIcon}>
            <FontistoIcon name="world-o" color="#fff" size={24} />
          </View>

          <View style={styles.resultAddress}>
            <Text style={styles.addressName}>cars.com</Text>
            <Text style={styles.address} ellipsizeMode="tail" numberOfLines={1}>
              https://arweave.net/LnP2BL-bXHLoCqdx0NYpWTfQ9bZqFgkZK8ETATt56Xo
            </Text>
          </View>
        </View>

        <Pressable style={styles.stamps}>
          <FontAwesomeIcon name="stamp" size={16} style={styles.stampIcon} />
          <Text style={styles.stampText}>Stamp</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#343a40',
    marginBottom: 7,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  resultInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  resultIcon: {
    padding: 6,
    borderRadius: 25,
    backgroundColor: colors.gray.dark,
  },
  resultAddress: {
    gap: 4,
  },
  addressName: {
    fontSize: 16,
    color: '#dee2e6',
  },
  address: {
    width: 220,
    fontSize: 13,
    color: '#ced4da',
  },
  stamps: {
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    gap: 6,
    alignItems: 'center',
  },
  stampIcon: {},
  stampText: {
    fontSize: 14.5,
    fontWeight: '600',
    color: colors.black.dark,
  },
  resultText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '500',
    color: '#64b5f6',
  },
  resultDescription: {
    color: colors.white.light,
    fontSize: 14.5,
    fontWeight: '400',
    paddingVertical: 5,
  },
  tagsContainer: {
    padding: 10,
    marginTop: 10,
  },
  tag: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ced4da',
    fontSize: 14,
    fontWeight: '500',
    color: '#baebff',
  },
});

export default SearchResult;
