
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCPTNz2lwKYa6KDljgTDDlvVrZ-a9UBlqs",
  authDomain: "faculdade-invest.firebaseapp.com",
  projectId: "faculdade-invest",
  storageBucket: "faculdade-invest.appspot.com",
  messagingSenderId: "610133207742",
  appId: "1:610133207742:web:86bb211acb7a0e616d0cef",
  measurementId: "G-DVWN9F77V9"
};

// Initialize Firebase
 const Firebase = initializeApp(firebaseConfig);

 export default Firebase;