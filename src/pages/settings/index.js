

import React, { useEffect } from 'react';

import { getAuth, signOut } from "firebase/auth";
import Firebase from '../../../firebase';

import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Settings() {

  const auth = getAuth(Firebase);

  const navigation = useNavigation();

/*   useEffect(() => {

    console.log(auth.currentUser)
    if(auth.currentUser === undefined) {
      navigation.navigate('Welcome');
    }

  },[auth]); */


  function handleSignOut() {
    signOut(auth).then(() => {
      console.log("sign out successfully");
      alert('Sign out successfully');
      navigation.navigate('Welcome');
    })
      .catch((error) => {
        alert(error.message);
      });
  }




  return (
    <View>
      <Text>Settings page</Text>


      <TouchableOpacity style={styles.btnSignIn} onPress={() => handleSignOut()}>
        <Text style={styles.btnText}>Sair</Text>
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