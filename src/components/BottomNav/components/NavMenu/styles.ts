import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    height: '62%',
    backgroundColor: colors.black.secondary,
  },
  doneTextWrapper: {
    marginBottom: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: colors.gray.light,
  },
  doneText: {
    padding: 10,
    fontSize: 15,
    paddingRight: 15,
    fontWeight: '500',
    textAlign: 'right',
    color: colors.blue.medium,
    paddingVertical: 14,
  },
  menuItem: {
    paddingBottom: 10,
    marginTop: 10,
  },
  bookmarksGrayed: {
    color: 'gray',
  },
  infoWrapper: {
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  menuItemText: {
    fontSize: 16,
    paddingTop: 10,
    fontWeight: '600',
    paddingVertical: 8,
    color: colors.white.light,
  },
  menuItemDescription: {
    fontSize: 13,
    fontWeight: '600',
    paddingHorizontal: 12,
    color: colors.blue.light,
  },
});

export default styles;
