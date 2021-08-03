import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1dztSd-YpPhg0zR1rLsgLKh9Hno5dUcg",
  authDomain: "clone-a2352.firebaseapp.com",
  projectId: "clone-a2352",
  storageBucket: "clone-a2352.appspot.com",
  messagingSenderId: "139950262745",
  appId: "1:139950262745:web:5d9a083fffb31c608f71c8",
  measurementId: "G-X49JBL4EZ6"
};

 const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
//   const storage= firebase.storage();


  export {auth,provider,db};
//   export default db;