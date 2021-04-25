import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: 'disney-plus-clone-c5c7f.firebaseapp.com',
	projectId: 'disney-plus-clone-c5c7f',
	storageBucket: 'disney-plus-clone-c5c7f.appspot.com',
	messagingSenderId: '499013245535',
	appId: process.env.REACT_APP_APP_ID,
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export {auth, provider, storage}
export default db
