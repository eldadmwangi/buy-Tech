import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";


// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQX5i5o2xjrFjzRjFwyQ7JHEPQXlQox0A",
  authDomain: "buy-tech-ac05c.firebaseapp.com",
  projectId: "buy-tech-ac05c",
  storageBucket: "buy-tech-ac05c.appspot.com",
  messagingSenderId: "695330045391",
  appId: "1:695330045391:web:796cafcaf3e6cd83e8a6ba",
  measurementId: "G-V4V87GQDMK"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export  {auth, db}





// const register =(e)=>{
//   e.preventDefault()
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         console.log(auth)
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// }











 






















// import firebase from 'firebase/app'
// import 'firebase/auth'

//  const app = firebase.initializeApp ({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// });

// export const auth = app.auth()
// export default app;






// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export  {auth, db}