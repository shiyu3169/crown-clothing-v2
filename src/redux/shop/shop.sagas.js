import { convertCollectionsSnapshotToMap, firestore } from 'firebase/firebase'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  fetchCollectionStart,
} from './shop.reducer'

function* fetchCollectionsAsync() {
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

function* fetchCollectionsStart() {
  yield takeLatest(
    fetchCollectionStart,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
