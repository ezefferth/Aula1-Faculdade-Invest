
import React from 'react';
//import { StatusBar } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import AuthProvider from './src/components/context';

export default function App() {
  return (


    <NavigationContainer>
      <AuthProvider>
        {/* <StatusBar backgroundColor='#A80800' barStyle='dark-content' /> */}
        <Routes />
      </AuthProvider>
    </NavigationContainer>

  );
}


/* 
BIBLIOTECA DE CORES
#A80800

#FF2519

#F50D00

#00A840

#00F55D

#PRETOS OU CINZAS ESCUROS
*/
