import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCOS3IKhyBoua_aaRB52Z9tvDFTWWQwxMw',
  authDomain: 'e-clothing-8174b.firebaseapp.com',
  databaseURL: 'https://e-clothing-8174b.firebaseio.com',
  projectId: 'e-clothing-8174b',
  storageBucket: 'e-clothing-8174b.appspot.com',
  messagingSenderId: '769747248310',
  appId: '1:769747248310:web:d8f0f9087658a5c58c3217',
}

// Initialize Firebase
firebase.initializeApp(config)

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ params: 'select_account' })

export const createUserProfileDocument = async (userAuth, additionalDate) => {
  if (!userAuth) return
  const userRef = firestore.doc(`user/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalDate,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => console.log(error))
