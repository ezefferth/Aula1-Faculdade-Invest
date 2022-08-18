import {
  View,
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/home'
import SignIn from '../pages/signIn';
import Welcome from '../pages/welcome';
import SignUp from '../pages/signUp';
import Settings from '../pages/settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { AuthContext } from '../components/context';
import React, { useContext } from 'react';


export default function Routes() {


  const { signed } = useContext(AuthContext);

  /*   const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null); */

  //TODAS STACKS DA HOME SERARAM AQUI
  //EM SETTINGS SE HOUVER DA MESMA FORMA
  const HomeStack = createNativeStackNavigator();
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="HomeScreen" component={Home} />
      </HomeStack.Navigator>
    )
  }

  const SettingsStack = createNativeStackNavigator();
  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
        <SettingsStack.Screen name="SettingsStack" component={Settings} />
      </SettingsStack.Navigator>
    )
  }

  function NotSignedScreen() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        //options={{ headerShown: false }}//retira o header nome da page
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        //options={{ headerShown: false }}//retira o header nome da page
        />
      </Stack.Navigator>
    )
  }

  function SignedScreens() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    )
  }

  return (
    signed ? (
      <SignedScreens />
    ) : (
      <NotSignedScreen />
    )
  )
}