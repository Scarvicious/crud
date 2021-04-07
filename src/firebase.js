import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyBcGxQl1SruS5YFnLpru6PMTuS7q7N3OmQ",
    authDomain: "crud-fc2cb.firebaseapp.com",
    projectId: "crud-fc2cb",
    storageBucket: "crud-fc2cb.appspot.com",
    messagingSenderId: "481666932491",
    appId: "1:481666932491:web:81eccf9de084110c2ccc0e"
}

export const firebaseApp = firebase.initializeApp( firebaseConfig )