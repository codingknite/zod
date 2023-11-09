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
import MediaViewer from '../screens/MediaViewer';
import ViewMedia from '../screens/ViewMedia';
import SplashScreen from '../screens/Splash';

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
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Webview" component={Webview} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="ViewMedia" component={ViewMedia} />
        <Stack.Screen name="MediaViewer" component={MediaViewer} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
