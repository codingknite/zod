import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.black.onboardScreen,
  },
  loginContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  loginHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginText: {
    fontSize: 28,
    fontWeight: '700',
    alignSelf: 'center',
    color: colors.white.medium,
  },
  formContainer: {
    marginTop: 30,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 5,
    color: colors.white.medium,
  },
  formInput: {
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingLeft: 50,
    borderRadius: 10,
    fontWeight: '600',
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.gray.light,
    color: colors.white.light,
  },
  mailIcon: {
    position: 'absolute',
    top: 60,
    left: 15,
  },
  lockIcon: {
    position: 'absolute',
    top: 177,
    left: 15,
  },
  passwordText: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 12,
    paddingBottom: 5,
    color: colors.white.medium,
  },
  loginButton: {
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 15.5,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  loginButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white.light,
  },
  fillFieldsText: {
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 12,
    color: colors.errorRed,
  },
  invalidStyles: {
    borderColor: colors.errorRed,
  },
});

export default styles;
