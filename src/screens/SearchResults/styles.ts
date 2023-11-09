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
    backgroundColor: colors.black.onboardScreen,
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
    borderRadius: 32,
    paddingRight: 38,
    fontWeight: '500',
    alignSelf: 'center',
    color: colors.white.light,
    backgroundColor: colors.gray.light,
  },
  searchIcon: {
    position: 'absolute',
    top: 95,
    left: 23,
  },
  cancelIcon: {
    position: 'absolute',
    top: 97,
    right: 20,
  },
  resultCategories: {
    gap: 12,
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
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
  testOverlap: {
    backgroundColor: 'orangered',
    height: '90%',
  },
  loadingContainer: {
    height: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
