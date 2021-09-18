import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCOS3IKhyBoua_aaRB52Z9tvDFTWWQwxMw',
  authDomain: 'e-clothing-8174b.firebaseapp.com',
  databaseURL: 'https://e-clothing-8174b.firebaseio.com',
  projectId: 'e-clothing-8174b',
  storageBucket: 'e-clothing-8174b.appspot.com',
  messagingSenderId: '769747248310',
  appId: '1:769747248310:web:d8f0f9087658a5c58c3217',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
export const firestore = getFirestore()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ params: 'select_account' })
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error))
