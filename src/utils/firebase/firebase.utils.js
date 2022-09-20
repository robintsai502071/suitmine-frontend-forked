import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

// console.log('REACT_APP_API_KEY', process.env.REACT_APP_API_KEY);
// console.log(
//   'REACT_APP_MESSAGING_SENDER_ID',
//   process.env.REACT_APP_MESSAGING_SENDER_ID
// );
// console.log('REACT_APP_APP_ID', process.env.REACT_APP_APP_ID);
console.log('REACT_APP_MEASUREMENT_ID', process.env.REACT_APP_MEASUREMENT_ID);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'suitmine.firebaseapp.com',
  projectId: 'suitmine',
  storageBucket: 'suitmine.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signOutGoogle = async () => await signOut(auth);
