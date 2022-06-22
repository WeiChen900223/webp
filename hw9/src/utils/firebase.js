import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDIiq9ZnJcQbOw4Uw_7b9T4I7weDahwFog",
    authDomain: "social-cool-2d852.firebaseapp.com",
    projectId: "social-cool-2d852",
    storageBucket: "social-cool-2d852.appspot.com",
    messagingSenderId: "67993010605",
    appId: "1:67993010605:web:1ee61df04b44cf01486124"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;