import React from 'react';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Search from '../screens/Search';
import SearchResults from '../screens/SearchResults';
import Onboard from '../screens/Onboard';
import Webview from '../screens/WebView/WebView';
import ImageViewer from '../screens/ImageViewer';
import VideoRenderer from '../screens/VideoRenderer';
import ViewMedia from '../screens/ViewMedia';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Search: undefined;
  Onboard: undefined;
  Webview: {link: string};
  SearchResults: undefined;
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="ImageViewer">
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Webview" component={Webview} />
        <Stack.Screen name="ImageViewer" component={ImageViewer} />
        <Stack.Screen name="VideoRenderer" component={VideoRenderer} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="ViewMedia" component={ViewMedia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// done -> Home ✅
// done -> Login ✅
// done -> Signup ✅
// done -> Search ✅
// done -> SearchResults ✅
// todo configure react-navigation on Android
