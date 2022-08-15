import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import LogoInvest from '../../assets/logoInvest.svg';

import { useNavigation } from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from '../../../firebase';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'



export default function SignUp() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const auth = getAuth(Firebase);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    })

    return unsubscribe;
  }, []);



  function handleSignUp() {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        })
    }

  }


  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerLogo} animation='flipInX'>
        <LogoInvest style={styles.logo} width={80} height={80} />
        <Text style={styles.logoText}>Invest</Text>

      </Animatable.View>
      <View>
        <Text style={styles.welcome}>Criar Conta</Text>
      </View>


      <Animatable.View style={styles.containerForm} animation='fadeInLeft'>

        <Text style={styles.formText}>Email</Text>
        <TextInput
          style={styles.formInput}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder='Digite seu email'
        />

        <Text style={styles.formText}>Senha</Text>
        <TextInput
          style={styles.formInput}
          placeholder='Digite sua senha'
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Text style={styles.formText}>Confirmar Senha</Text>
        <TextInput
          style={styles.formInput}
          placeholder='Confirme sua senha'
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.btnSignIn} onPress={() => handleSignUp()}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSignUp} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btnTextVoltar}>Já possui conta? Voltar</Text>
        </TouchableOpacity>


      </Animatable.View>

    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E6'
  },
  containerLogo: {
    //flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  logoText: {
    marginTop: 25,
    fontSize: 34,
    fontWeight: 'bold',
  },
  welcome: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  containerForm: {
    flex: 2,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  formText: {
    fontSize: 18,
    paddingTop: 30,
  },
  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CC2937',
    height: 40,
    marginBottom: 10,
    fontSize: 16,
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
  btnTextVoltar: {
    marginTop: 20,
    fontSize: 16,
    color: '#8D8D99',
  },

});