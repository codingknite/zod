import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#343a40',
    marginBottom: 7,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  resultInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  resultIcon: {
    padding: 6,
    borderRadius: 25,
    backgroundColor: colors.black.onboardScreen,
  },
  resultAddress: {
    gap: 4,
  },
  addressName: {
    fontSize: 16,
    color: '#dee2e6',
  },
  address: {
    width: 220,
    fontSize: 13,
    color: '#ced4da',
  },
  stamps: {
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    gap: 6,
    alignItems: 'center',
  },
  stampIcon: {},
  stampText: {
    fontSize: 14.5,
    fontWeight: '600',
    color: colors.black.dark,
  },
  resultText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '500',
    color: '#64b5f6',
  },
  resultDescription: {
    color: colors.white.light,
    fontSize: 14.5,
    fontWeight: '400',
    paddingVertical: 5,
  },
  tagsContainer: {
    padding: 10,
    marginTop: 10,
  },
  tag: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ced4da',
    fontSize: 14,
    fontWeight: '500',
    color: '#baebff',
  },
});

export default styles;
