import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
  },
  searchContainer: {
    backgroundColor: colors.gray.light,
    paddingTop: 70,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#1A1E24',
    width: '85%',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '500',
    color: colors.white.light,
  },
  cancelText: {
    fontSize: 16,
    color: '#adb5bd',
    fontWeight: '500',
  },
  recentSearchesContainer: {
    padding: 10,
    height: '100%',
    backgroundColor: '#212529',
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
    fontWeight: '500',
    color: '#adb5bd',
  },
});

export default styles;
