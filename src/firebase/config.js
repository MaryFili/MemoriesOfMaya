import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyCcIqt7x8xEQNuInvK6pECebwQy4nvrTBw",
    authDomain: "memories-of-maya.firebaseapp.com",
    projectId: "memories-of-maya",
    storageBucket: "memories-of-maya.appspot.com",
    messagingSenderId: "31560218172",
    appId: "1:31560218172:web:04d117822d4bfb8ebdb539",
    measurementId: "G-8HV4PY1D55"
};
//init Firebase
initializeApp(firebaseConfig)

//init Firestore
const db = getFirestore()

export { db }