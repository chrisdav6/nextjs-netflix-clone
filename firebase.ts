// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbMs7r2M8OayIvdyLnjmbUxP74fGUI7BU',
  authDomain: 'nextjs-netflix-clone-582dd.firebaseapp.com',
  projectId: 'nextjs-netflix-clone-582dd',
  storageBucket: 'nextjs-netflix-clone-582dd.appspot.com',
  messagingSenderId: '823930839055',
  appId: '1:823930839055:web:0407d44860b008fd06c37a',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
