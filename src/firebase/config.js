import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';
// storage of images
import { getFirestore } from 'firebase/firestore';
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

export const projectDatabase = getFirestore();
export const projectStorage = getStorage();
