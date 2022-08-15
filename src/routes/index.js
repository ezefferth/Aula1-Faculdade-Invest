
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

import { getAuth } from "firebase/auth";
import Firebase from '../../firebase';


export default function Routes() {

  const auth = getAuth(Firebase);

  const user = auth.currentUser;

  const HomeStack = createNativeStackNavigator();
  const SettingsStack = createNativeStackNavigator();


  //TODAS STACKS DA HOME SERARAM AQUI
  //EM SETTINGS SE HOUVER DA MESMA FORMA
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </HomeStack.Navigator>
    )
  }

  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </SettingsStack.Navigator>
    )
  }



  return (

    user ? (

      <Tab.Navigator>
        <Tab.Screen name='HomeTab' component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="SettingsTab" component={SettingsStackScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>

    ) : (

      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}//retira o header nome da page
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}//retira o header nome da page
        />
      </Stack.Navigator>
    )

  )
}