import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from 'firebase/firebase'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { signInFailure, signInSuccess } from './user.actions'
import userActionTypes from './user.types'

export function* getSnapshotFromUserAuth(userAuth) {
  const userRef = yield call(createUserProfileDocument, userAuth)
  const userSnapshot = yield userRef.get()
  yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
}

export function* SignInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle)
}

export function* SignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, SignInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
