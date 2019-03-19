import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBfsGNzh8Q3n2b0wyc7yhkoSao78JFiGcw",
    authDomain: "expensify-ce828.firebaseapp.com",
    databaseURL: "https://expensify-ce828.firebaseio.com",
    projectId: "expensify-ce828",
    storageBucket: "expensify-ce828.appspot.com",
    messagingSenderId: "340178328101"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
