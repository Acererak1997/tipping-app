import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBbcE--6Do48ib5mS-DnZar_L5HG8Kfdo",
  authDomain: "vue-firebase-auth-3f9d1.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-3f9d1.firebaseio.com",
  projectId: "vue-firebase-auth-3f9d1",
  storageBucket: "vue-firebase-auth-3f9d1.appspot.com",
  messagingSenderId: "880216807017",
  appId: "1:880216807017:web:f39392f7a85319bfc3b4f8",
  measurementId: "G-08QB7Q99FJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig, exercise-vue);
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore