import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBVyDLmwUs7z-qbIqjHtDpBg1z4Y8OJfVs",
  authDomain: "e-commerce-tecnofox.firebaseapp.com",
  projectId: "e-commerce-tecnofox",
  storageBucket: "e-commerce-tecnofox.appspot.com",
  messagingSenderId: "196992270680",
  appId: "1:196992270680:web:5fdf33e8cc6656bece652d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app
}