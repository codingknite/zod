import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  loadingContainer: {
    height: '50%',
    backgroundColor: colors.black.onboardScreen,
  },
  toggleProfileLoading: {
    alignSelf: 'flex-end',
  },
  loadingActivity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '50%',
    backgroundColor: colors.black.onboardScreen,
  },
  areaContainer: {
    marginBottom: 15,
  },
  doneText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
    paddingVertical: 12,
    paddingHorizontal: 20,
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
    fontSize: 13,
    marginTop: 10,
    fontWeight: '500',
    color: colors.textGray,
  },
  balanceText: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: '700',
    color: colors.blue.light,
  },
  address: {
    marginTop: 8,
    fontSize: 12.5,
    color: '#e9ecef',
  },
  buttonsContainer: {
    width: '90%',
    marginTop: 25,
    paddingVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 12,
    borderRadius: 32,
    width: '45%',
    justifyContent: 'center',
    backgroundColor: colors.black.light,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white.light,
  },
});

export default styles;
