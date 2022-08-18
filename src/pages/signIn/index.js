

import React, { useState, useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity

} from 'react-native';

import LogoInvest from '../../assets/logoInvest.svg';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


import { AuthContext } from '../../../src/components/context';

export default function SignIn() {

  const { handleSignIn } = useContext(AuthContext);

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  return (
    <View style={styles.container}>
      <Animatable.View style={styles.containerLogo} animation='flipInX'>
        <LogoInvest style={styles.logo} width={80} height={80} />
        <Text style={styles.logoText}>Invest</Text>

      </Animatable.View>
      <View>
        <Text style={styles.welcome}>Bem Vindo(a)</Text>
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

        <TouchableOpacity style={styles.btnSignIn} onPress={(event) => handleSignIn(event, email, password)} >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSignUp} onPress={() => navigation.navigate('SignUp')} >
          <Text style={styles.btnTextRegister}>Não possui conta? Cadastrar</Text>
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
  btnTextRegister: {
    marginTop: 20,
    fontSize: 16,
    color: '#8D8D99',
  },

});