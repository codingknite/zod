import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'space-between',
    backgroundColor: colors.gray.light,
  },
  bottomNav: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    backgroundColor: colors.gray.light,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 10,
  },
  contentArea: {
    backgroundColor: colors.gray.dark,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  logo: {
    width: 25,
    height: 25,
  },
  zodText: {
    fontSize: 35,
    fontWeight: '600',
    color: colors.white.light,
  },
  searchBar: {
    width: '95%',
    padding: 15,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 45,
    fontWeight: '500',
    borderRadius: 32,
    alignSelf: 'center',
    color: colors.white.light,
    backgroundColor: colors.gray.light,
  },
  searchIcon: {
    position: 'absolute',
    top: 95,
    left: 23,
  },
  resultCategories: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 12,
    padding: 10,
    paddingHorizontal: 12,
  },
  categoryText: {
    color: '#adb5bd',
  },
  categoryActive: {
    color: '#fff',
    paddingBottom: 5,
  },
  categoryWrapper: {
    borderBottomWidth: 2,
    borderColor: '#fff',
  },
});

export default styles;
