import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes/colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  toggleHistory: () => void;
}

const HistoryItem = ({item}: {item: string}) => {
  const checkWebLink = (input: string) => {
    const urlRegex =
      /^(http|https):\/\/[^ "]+|^[\w.]+[^ "]*\.[A-Za-z]{2,3}(\/.*)?$/;
    return urlRegex.test(input);
  };

  const isWebLink = checkWebLink(item);

  return (
    <Pressable style={styles.itemContainer}>
      <View style={styles.itemType}>
        {isWebLink ? (
          <>
            <MaterialCommunityIcons name="web" size={20} color="#fff" />
            <Text style={styles.searchText}>Web Page</Text>
          </>
        ) : (
          <>
            <Ionicons name="search" size={20} color="#fff" />
            <Text style={styles.searchText}>{item} - Zod Search</Text>
          </>
        )}
      </View>
      <Text style={styles.searchLink} numberOfLines={1}>
        {isWebLink
          ? item
          : `arweave-search.goldsky.com?q=${item.split(' ').join('%')}`}
      </Text>
    </Pressable>
  );
};

const History = ({toggleHistory}: Props) => {
  const [historyData, setHistoryData] = useState<Array<string>>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoadingData(true);

      const userId = await AsyncStorage.getItem('user-id');
      const resData = await axios.post(
        'http://localhost:3000/api/get-recent-history',
        {
          userId,
        },
      );

      const data = resData.data;

      if (data.message === 'SUCCESSFUL') {
        setHistoryData(data.data.searches.reverse());
        setLoadingData(false);
      }
    } catch (error) {
      setLoadingData(false);
    }
  };

  const clearHistory = async () => {
    try {
      const userId = await AsyncStorage.getItem('user-id');
      const resData = await axios.post(
        'http://localhost:3000/api/delete-recent-history',
        {
          userId,
        },
      );

      const data = resData.data;

      if (data.message === 'SUCCESSFUL') {
        toggleHistory();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loadingData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#fff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMenu}>
        <Pressable onPress={toggleHistory} style={styles.backWrapper}>
          <Text style={styles.backText}>Done</Text>
        </Pressable>

        <Text style={styles.primaryText}>History</Text>

        <MaterialIcons
          name="delete"
          size={23}
          color={colors.blue.light}
          onPress={clearHistory}
        />
      </View>

      <ScrollView style={styles.historyContainer}>
        {historyData.map((item, index) => (
          <HistoryItem key={index} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '62%',
    backgroundColor: colors.black.secondary,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    borderBottomColor: colors.gray.light,
  },
  backWrapper: {
    gap: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.blue.light,
  },
  primaryText: {
    fontSize: 16.5,
    fontWeight: '700',
    color: colors.white.light,
  },
  historyContainer: {
    paddingHorizontal: 15,
  },
  itemContainer: {
    marginVertical: 5,
    paddingVertical: 5,
    borderColor: colors.gray.light,
  },
  itemType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  searchText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.white.light,
  },
  searchLink: {
    fontSize: 12,
    paddingVertical: 1,
    color: colors.textGray,
  },
  loadingContainer: {
    height: '62%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black.secondary,
  },
});

export default History;
