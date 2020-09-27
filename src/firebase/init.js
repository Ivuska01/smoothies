import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDegUXsGh053P_qycN9LikL0qwU8MjoRL8",
    authDomain: "smoothies-4e33c.firebaseapp.com",
    databaseURL: "https://smoothies-4e33c.firebaseio.com",
    projectId: "smoothies-4e33c",
    storageBucket: "smoothies-4e33c.appspot.com",
    messagingSenderId: "530499458791",
    appId: "1:530499458791:web:23e92a3150e005429a3442",
    measurementId: "G-919D86P7LS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()


  