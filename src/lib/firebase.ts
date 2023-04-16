import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDvKZa6NO_zM4ucF2E39Azxvb7Y0iGvQVk',
  authDomain: 'http-quest.firebaseapp.com',
  projectId: 'http-quest',
  storageBucket: 'http-quest.appspot.com',
  messagingSenderId: '325468938624',
  appId: '1:325468938624:web:e1b45b0642be2d3b2ca165',
  measurementId: 'G-SCQFLQ17VK',
};

if (!firebase?.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
