import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    height: '95%',
    backgroundColor: colors.black.onboardScreen,
  },
  areaContainer: {
    marginBottom: 15,
  },
  doneText: {
    padding: 10,
    fontSize: 15,
    paddingRight: 15,
    fontWeight: '500',
    textAlign: 'right',
    color: colors.blue.medium,
  },
  profileInfoContainer: {
    paddingHorizontal: 12,
  },
  username: {
    fontSize: 26,
    fontWeight: '700',
    paddingVertical: 10,
    color: colors.white.medium,
  },
  balanceHeader: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
    color: colors.textGray,
  },
  balanceText: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: '700',
    color: '#adb5bd',
  },
  address: {
    marginTop: 8,
    fontSize: 12.5,
    color: '#e9ecef',
  },
  uploadsHeader: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
    paddingVertical: 5,
    paddingHorizontal: 12,
    color: colors.textGray,
  },
  uploadsContainer: {},
  uploadItem: {
    padding: 10,
    marginBottom: 10,
    paddingBottom: 15,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    backgroundColor: '#16191c',
  },
  uploadTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  uploadTitle: {
    fontSize: 17.5,
    width: '80%',
    fontWeight: '500',
    color: colors.white.light,
  },
  uploadPrice: {
    width: '20%',
    textAlign: 'right',
    fontSize: 17.5,
    fontWeight: '500',
    color: colors.white.light,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ansInfoContainer: {
    gap: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight: '500',
    borderWidth: 0.75,
    borderRadius: 5,
    color: colors.textGray,
    borderColor: colors.primary,
    maxWidth: 130,
  },
  dateInfo: {},
  dateText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textGray,
  },
});

export default styles;
