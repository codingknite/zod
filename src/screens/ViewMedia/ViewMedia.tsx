/* eslint-disable react-native/no-inline-styles */
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {colors} from '../../themes/colors';
import axios, {AxiosResponse} from 'axios';
import searchBarStyles from '../Home/styles';
import TopNav from '../../components/TopNav';
import {useRoute} from '@react-navigation/native';
import BottomNav from '../../components/BottomNav';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavMenu from '../../components/BottomNav/components/Menu';

interface TransactionTag {
  name: string;
  value: string;
}

interface TransactionData {
  size: string;
  type: string;
}

interface TransactionNode {
  id: string;
  tags: TransactionTag[];
  data: TransactionData;
}

interface TransactionEdge {
  node: TransactionNode;
}

interface TransactionResponseData {
  transactions: {
    edges: TransactionEdge[];
  };
}

interface ApiResponseData {
  status: number;
  data: TransactionResponseData;
  errors: null;
}

interface ApiResponse {
  data: ApiResponseData;
  message: string;
}

const ViewMedia = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [transactionData, setTransactionData] = useState<TransactionEdge[]>([]);
  const {transactionId} = route.params;

  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    Image.getSize(
      `https://arweave.net/${transactionId}`,
      (width, height) => {
        setImageDimensions({width, height});
      },
      error => {
        console.error('Error getting image size: ', error);
      },
    );
  }, [transactionId]);

  useEffect(() => {
    const fetchTxn = async () => {
      try {
        const postData = {
          transactionId,
          gateway: '',
        };

        const queryResponse: AxiosResponse<ApiResponse> = await axios.post(
          'http://localhost:3000/api/query-transaction',
          postData,
        );

        const responseData = queryResponse.data;
        setTransactionData(responseData.data.data.transactions.edges);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchTxn();
  }, [transactionId]);

  const tags = transactionData.length > 0 && transactionData[0].node.tags;

  const openViewBlock = (txnId: string) => {
    navigation.navigate('Webview', {
      link: `https://viewblock.io/arweave/tx/${txnId}`,
    });
  };

  const openBazar = (txnId: string) => {
    navigation.navigate('Webview', {
      link: `https://bazar.ar-io.dev/#/asset/${txnId}`,
    });
  };

  const handleOpenMenu = () => {
    setOpenMenu(val => !val);
  };

  const imageWidth = imageDimensions.width > 0 ? imageDimensions.width : 1;
  const imageHeight = imageDimensions.width > 0 ? imageDimensions.height : 1;

  return (
    <View style={searchBarStyles.container}>
      <TopNav />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={colors.white.light} />
        </View>
      ) : (
        <ScrollView style={styles.contentArea}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" color="#246bee" size={22} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <Image
            source={{uri: `https://arweave.net/${transactionId}`}}
            style={[
              styles.image,
              {
                width: '90%',
                aspectRatio: imageWidth / imageHeight,
              },
            ]}
          />

          <View style={styles.tagsContainer}>
            {tags &&
              tags.map((tag, index) => {
                if (tag.name === 'Title') {
                  return (
                    <Text style={styles.title} key={index}>
                      {tag.value}
                    </Text>
                  );
                }
              })}

            <View style={styles.links}>
              <Pressable onPress={() => openViewBlock(transactionId)}>
                <Text style={styles.txnId}>ViewBlock ↗</Text>
                <View style={styles.linkUnderline} />
              </Pressable>

              <Pressable onPress={() => openBazar(transactionId)}>
                <Text style={styles.txnId}>Bazar ↗</Text>
                <View style={styles.linkUnderline} />
              </Pressable>
            </View>

            <View style={styles.tagsView}>
              {tags &&
                tags.map((tag, index) => {
                  if (
                    tag.name === 'Description' ||
                    tag.name === 'Collection-Code' ||
                    tag.name === 'Indexed-By' ||
                    tag.name === 'License' ||
                    tag.name === 'License-Fee' ||
                    tag.name === 'Commercial-Use' ||
                    tag.name === 'Payment-Mode' ||
                    tag.name === 'Access' ||
                    tag.name === 'Creator' ||
                    tag.name === 'Derivation' ||
                    tag.name === 'App-Name'
                  ) {
                    return (
                      <View style={styles.tag} key={index}>
                        <Text style={styles.tagName}>{tag.name}</Text>
                        <Text style={styles.tagValue}>{tag.value}</Text>
                      </View>
                    );
                  }
                })}
            </View>
          </View>
        </ScrollView>
      )}

      {openMenu ? <NavMenu toggleMenu={handleOpenMenu} /> : null}
      {openMenu ? null : <BottomNav toggleMenu={handleOpenMenu} />}
    </View>
  );
};

export default ViewMedia;
