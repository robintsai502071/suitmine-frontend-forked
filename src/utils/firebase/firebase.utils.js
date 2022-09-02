import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAQXepXkJkLcHpiv65-rQ6nxz5mi70Gkmc',
  authDomain: 'suitmine.firebaseapp.com',
  projectId: 'suitmine',
  storageBucket: 'suitmine.appspot.com',
  messagingSenderId: '422650095880',
  appId: '1:422650095880:web:8eaee52b4b749ea3d164bd',
  measurementId: 'G-LSLQWN5K9Z',
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
