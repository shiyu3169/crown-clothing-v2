import { shopActionTypes } from './shop.types'

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: '',
}

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      }
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}

export default shopReducer
