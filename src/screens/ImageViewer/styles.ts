import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  contentArea: {
    backgroundColor: colors.black.onboardScreen,
    height: '200%',
  },
  zodContainer: {
    paddingVertical: 25,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zodText: {
    fontSize: 50,
    fontWeight: '600',
    color: colors.white.light,
  },
  imagesText: {
    position: 'absolute',
    top: 120,
    left: '55%',
    paddingVertical: 1,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 32,
    fontSize: 14.5,
    fontWeight: '400',
    borderWidth: 1.2,
    borderColor: colors.textGray,
    marginVertical: 10,
    color: colors.white.light,
  },
  imagesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    padding: 5,
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: '32%',
  },
  imageCaption: {
    backgroundColor: 'orangered',
    fontSize: 12,
    color: colors.white.light,
  },
  testContainer: {
    flex: 1,
    backgroundColor: colors.black.onboardScreen,
  },
  additionalInfo: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },
  addCustom: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    borderColor: colors.primary,
    marginVertical: 10,
    marginLeft: 30,
    width: 150,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white.light,
  },
  appNameInputContainer: {},
  customInputField: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 5,
    paddingVertical: 13.5,
    color: colors.white.light,
    borderColor: colors.textGray,
  },
  specialStyles: {
    borderWidth: 0,
    color: colors.white.light,
    backgroundColor: colors.primary,
  },
  submitCustom: {
    backgroundColor: colors.blue.medium,
    width: '35%',
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 32,
  },
});

export default styles;