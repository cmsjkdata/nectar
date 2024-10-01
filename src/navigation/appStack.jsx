import React, {useEffect} from 'react';
import LandingScreen from '../screens/landingScreen';
import Welcome from '../screens/welcome';
import Profile from '../screens/accountInfo/profile';
import PhoneNumber from '../screens/signIn/phoneNumber';
import Code from '../screens/signIn/code';
import Location from '../screens/accountInfo/location';
import LogIn from '../screens/signIn/logIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/signIn';
import Home from '../screens/home';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const appStack = () => {
  useEffect(() => {
    // Configure Google Sign-In on app load
    GoogleSignin.configure({
      webClientId: 'dsafg', // Add your web client ID here
      offlineAccess: true, // if you need server-side access
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Code"
          component={Code}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default appStack;
