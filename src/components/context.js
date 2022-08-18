
import React, {
  createContext,
  useState,
  useEffect,
} from 'react';

import Firebase from '../../firebase';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const auth = getAuth(Firebase);

  const navigation = useNavigation();

  const [signed, setSigned] = useState(false);

  const [user, setUser] = useState({
    token: '',
    user: {
      email: '',
    }
  })


  async function handleSignIn(event, email, password) {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        console.log('Sign in successful');
        
        navigation.navigate('Home');
        alert("Sign in successful");

      }).catch((error) => {
        console.log("Error: " + error.message);
        alert(error.message);
      });
  }

  async function handleSignOut() {
    await signOut(auth)
      .then(() => {
        console.log("sign out successfully");
        alert('Sign out successfully');
        navigation.navigate('Welcome');
      })
      .catch((error) => {
        alert(error.message);
      });
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          token: user.uid,
          user: {
            email: user.email
          }
        })
        setSigned(true);
      }
      else {
        setSigned(false);
        setUser({
          token: '',
          user: {
            email: '',
          },
        })
      }
    })

    return unsubscribe
  }, [auth])

  const value = {
    auth,
    signed,
    handleSignIn,
    handleSignOut,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}



