import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50,
    backgroundColor: colors.gray.light,
  },
  searchContainer: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchBarWrapper: {
    width: '95%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.black.onboardScreen,
  },
  searchBar: {
    padding: 11,
    width: '90%',
    fontSize: 15,
    borderRadius: 10,
    fontWeight: '500',
    paddingHorizontal: 12,
    color: colors.white.medium,
  },
  logoContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 17,
    height: 17,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  primaryText: {
    marginTop: 50,
    fontSize: 46,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white.light,
  },

  shortcutsContainer: {
    width: '85%',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 25,
    paddingVertical: 15,
    backgroundColor: colors.black.onboardScreen,
  },
  shortcutsText: {
    padding: 5,
    fontSize: 13,
    paddingLeft: 10,
    fontWeight: '600',
    color: colors.white.medium,
  },
  shortcutItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
  },
  shortcutItem: {
    alignItems: 'center',
  },
  shortCutIcon: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(251, 102, 57, 1)',
  },
  shortcutItemText: {
    fontSize: 11,
    paddingTop: 8,
    fontWeight: '600',
    color: colors.white.medium,
  },
  newsContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  loadingContainer: {
    paddingVertical: 25,
  },
  newsText: {
    padding: 12,
    fontSize: 23,
    marginTop: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: colors.white.light,
    textTransform: 'uppercase',
  },
  articlesContainer: {
    backgroundColor: 'orangered',
  },
  bottomNav: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    backgroundColor: colors.gray.light,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 10,
  },
});

export default styles;
