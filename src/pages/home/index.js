

import React, { useContext } from 'react';


import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../../src/components/context'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Home() {

  const {
    handleSignOut,
    signed,
    user
  } = useContext(AuthContext);


  function handleTest() {
    console.log(user);
  }

  return (
    <View>
      <Text>Home page</Text>


      <TouchableOpacity style={styles.btnSignIn} onPress={() => handleSignOut()}>
        <Text style={styles.btnText}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSignIn} onPress={() => handleTest()}>
        <Text style={styles.btnText}>TEST</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E6'
  },
  btnSignIn: {
    marginTop: 10,
    backgroundColor: '#F75A68',
    //height: 30,
    borderRadius: 5,
    width: '100%',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});