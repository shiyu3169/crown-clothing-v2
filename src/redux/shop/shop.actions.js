import { convertCollectionsSnapshotToMap, firestore } from 'firebase/firebase'
import { shopActionTypes } from './shop.types'

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionStartAsync = () => async (dispatch) => {
  try {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())
    const snapshot = await collectionRef.get()
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    dispatch(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    fetchCollectionsFailure(error.message)
  }
}
