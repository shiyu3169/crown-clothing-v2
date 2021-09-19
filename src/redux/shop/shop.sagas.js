import { convertCollectionsSnapshotToMap, firestore } from 'firebase/firebase'
import { takeEvery, call, put } from 'redux-saga/effects'
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions'
import { shopActionTypes } from './shop.types'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    console.error(error)
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
