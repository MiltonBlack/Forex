import * as firebase from 'firebase/app';
import 'firebase/storage';
// storage of images
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS5ksYZPP8mSLf2znjM1LYs9BDy7kaZfY",
  authDomain: "iser-connect.firebaseapp.com",
  projectId: "iser-connect",
  storageBucket: "iser-connect.appspot.com",
  messagingSenderId: "693332412228",
  appId: "1:693332412228:web:f24b53b6d4589a50c87911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectDatabase = firebase.firestore();

export { projectDatabase, projectStorage };