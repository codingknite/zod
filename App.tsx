import React = require('react');
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Search from './src/screens/Search';
import SearchResults from './src/screens/SearchResults';
import {View, StyleSheet} from 'react-native';
import Signup from './src/screens/Signup';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <SearchResults />
      {/* <Home /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default App;

// done -> Home ✅
// done -> Login ✅
// done -> Signup ✅
// done -> Search ✅
