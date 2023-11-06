import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes/colors';

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

export default styles;
