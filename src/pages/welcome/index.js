

import React from 'react';

import Firebase from '../../../firebase';
import { getAuth } from "firebase/auth";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  //Image,
} from 'react-native';

import LogoInvest from '../../assets/logoInvest.svg';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Welcome() {

  const navigation = useNavigation();

  const auth = getAuth(Firebase);

  const handleSign = () => {

    if (auth?.currentUser) {
      navigation.navigate('Home')
    }
    else {
      navigation.navigate('SignIn');
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>

        {/* <Imagstylee ={styles.containerImage} source={require('../../assets/logoInvest.svg')}/> */}

        <Animatable.View style={styles.containerLogo} animation='flipInY' duration={1500}>
          <LogoInvest style={styles.logo} width={80} height={80} />
        </Animatable.View>
        <Text style={styles.title}>Invest</Text>
        <Text style={styles.titleDescription}>Faculdade Invest de Ciências e Tecnologia</Text>
        <Text style={styles.titleSubDescription}>Ensino de qualidade, comprometido com valores científicos, étnicos, sociais e culturais.</Text>
      </View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp' duration={1000}>
        <Text style={styles.titleForm}>Realize seu login para começar</Text>
        <TouchableOpacity onPress={() => handleSign()} style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  containerTitle: {
    flex: 3,
    backgroundColor: 'FFFFFF',

  },
  containerForm: {
    flex: 1,
    backgroundColor: '#CC2937', //color danger
    borderTopRightRadius: 20, //faz a borda nas laterais do app
    borderTopLeftRadius: 20,
    paddingStart: '5%', //da a distancia entre os elementos da view e o conteudo
    paddingEnd: '5%',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
  },
  titleDescription: {
    fontWeight: 'bold',
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  titleSubDescription: {
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  titleForm: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    color: '#E1E1E6'

  },
  button: {
    width: '60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },


});