// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Te7w3HKbInZTJV0G9qY3JiLMCl_1rsM",
  authDomain: "b9a9-real-estate-tabassumsabaa.firebaseapp.com",
  projectId: "b9a9-real-estate-tabassumsabaa",
  storageBucket: "b9a9-real-estate-tabassumsabaa.appspot.com",
  messagingSenderId: "785903403499",
  appId: "1:785903403499:web:c85b2c23d929c2b36899ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;