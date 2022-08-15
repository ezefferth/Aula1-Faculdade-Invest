
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#A80800' barStyle='dark-content' />
      <Routes />
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
