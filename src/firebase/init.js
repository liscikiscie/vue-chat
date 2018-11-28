import firebase from 'firebase';
import firestore from 'firebase/firestore'

let config = {
    apiKey: 'AIzaSyBVYUvzUjvknUGlhEFLKbLvyTW5zN9y_Wg',
    authDomain: 'vue-chat-5dd21.firebaseapp.com',
    databaseURL: 'https://vue-chat-5dd21.firebaseio.com',
    projectId: 'vue-chat-5dd21',
    storageBucket: 'vue-chat-5dd21.appspot.com',
    messagingSenderId: '227231670688'
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();
