import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  backButton: {
    gap: 8,
    width: 110,
    padding: 12,
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.black.onboardScreen,
  },
  backText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.blue.medium,
  },
  contentArea: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.black.onboardScreen,
  },
  title: {
    fontSize: 26,
    marginBottom: 15,
    fontWeight: '700',
    color: colors.textGray,
  },
  description: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textGray,
    marginBottom: 15,
  },
  txnId: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.blue.medium,
  },
  image: {
    width: '50%',
    alignSelf: 'center',
  },
  tagsContainer: {
    width: '94%',
    alignSelf: 'center',
    marginTop: 25,
  },
  links: {
    gap: 12,
    flexDirection: 'row',
    paddingVertical: 8,
  },
  linkUnderline: {
    height: 2,
    width: '100%',
    backgroundColor: colors.blue.medium,
  },
  tagsView: {
    marginTop: 30,
    marginBottom: 50,
  },
  tag: {
    gap: 5,
    padding: 12,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#16191c',
  },

  tagName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  tagValue: {
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 4,
    color: colors.white.light,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black.onboardScreen,
  },
});

export default styles;
