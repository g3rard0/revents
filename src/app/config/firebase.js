import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADtsP8Fb4qpmEdF40ZzgsKsVggOYFPbPg",
    authDomain: "revents-315cd.firebaseapp.com",
    databaseURL: "https://revents-315cd.firebaseio.com",
    projectId: "revents-315cd",
    storageBucket: "revents-315cd.appspot.com",
    messagingSenderId: "198242005833"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
