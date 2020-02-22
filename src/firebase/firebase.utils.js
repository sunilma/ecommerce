import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAq4EihLDUGVjpMtjB_YRMgCl84cHY-KYA",
    authDomain: "ecommerce-f3b53.firebaseapp.com",
    databaseURL: "https://ecommerce-f3b53.firebaseio.com",
    projectId: "ecommerce-f3b53",
    storageBucket: "ecommerce-f3b53.appspot.com",
    messagingSenderId: "250401457441",
    appId: "1:250401457441:web:36736068830a329a456a60",
    measurementId: "G-FCY05F3ZBZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
