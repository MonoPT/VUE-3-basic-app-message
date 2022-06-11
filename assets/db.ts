import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const conf = {
    apiKey: "AIzaSyAKwmJQYxHWXzjj_zScd-nKF4jsrBlIREo",
    authDomain: "firevuechat-a86b7.firebaseapp.com",
    databaseURL: "https://firevuechat-a86b7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firevuechat-a86b7",
    storageBucket: "firevuechat-a86b7.appspot.com",
    messagingSenderId: "376942569666",
    appId: "1:376942569666:web:1f7d55a6e0b088a6b3335b"

}

const db = firebase.initializeApp(conf)

export default db