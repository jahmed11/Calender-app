import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDLxwB1q__R2mER4fg8uD8Hrjcs-3z6fxk",
  authDomain: "my-calendar-80ea7.firebaseapp.com",
  databaseURL: "https://my-calendar-80ea7.firebaseio.com",
  projectId: "my-calendar-80ea7",
  storageBucket: "my-calendar-80ea7.appspot.com",
  messagingSenderId: "735045326116",
  appId: "1:735045326116:web:c4f89025bb05ba0cfc8fb1",
  measurementId: "G-LQJFTM0RRT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
