import { shopActionTypes } from './shop.types'

const initialState = {
  collections: null,
}

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      }
    default:
      return state
  }
}

export default shopReducer
