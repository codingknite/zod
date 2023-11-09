import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 7,
    backgroundColor: '#343a40',
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
    padding: 4,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
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
  stampText: {
    fontSize: 12,
    fontWeight: '700',
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
    marginTop: 12,
  },
  tag: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ced4da',
    flexDirection: 'row',
  },
  tagName: {
    fontSize: 12,
    color: '#baebff',
    fontWeight: '600',
  },
  tagValue: {
    fontSize: 12,
    color: '#baebff',
    fontWeight: '600',
  },
});

export default styles;
