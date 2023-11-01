import {colors} from '../../themes/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: colors.black.onboardScreen,
  },
  imageContainer: {
    marginBottom: 220,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  onboardContainer: {
    marginTop: 100,
    position: 'absolute',
    width: '100%',
    bottom: 80,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.white.medium,
  },
  secondaryText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#ced4da',
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  buttonsContainer: {
    marginTop: 50,
  },
  signupButton: {
    padding: 16,
    width: '90%',
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: colors.primary,
  },
  loginButton: {
    padding: 16,
    width: '90%',
    marginTop: 20,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#313131',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.white.light,
  },
});

export default styles;
