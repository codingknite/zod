import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.black.onboardScreen,
  },
  searchContainer: {
    gap: 10,
    paddingTop: 55,
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: colors.gray.light,
  },
  searchInput: {
    width: '100%',
    fontSize: 15,
    borderRadius: 10,
    paddingRight: 38,
    fontWeight: '500',
    paddingVertical: 11,
    paddingHorizontal: 15,
    color: colors.white.light,
    backgroundColor: colors.black.onboardScreen,
  },
  searchInputWrapper: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelIcon: {
    position: 'absolute',
    right: 9,
  },
  cancelText: {
    fontSize: 14,
    color: '#adb5bd',
    fontWeight: '500',
  },
  recentSearchesContainer: {
    padding: 10,
    backgroundColor: colors.black.onboardScreen,
  },
  searchesWrapper: {
    height: '85%',
  },
  recentSearchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  searchesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#adb5bd',
  },
  clearText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#615cf9',
  },
  searchItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: 10,
    width: '85%',
    alignSelf: 'center',
  },
  searchItemText: {
    fontSize: 14,
    color: '#adb5bd',
    fontWeight: '500',
  },
});

export default styles;
