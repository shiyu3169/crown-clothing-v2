import { userActionTypes } from './user.types'

const initialState = {
  currentUser: null,
  authLoading: true,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        authLoading: false,
      }
    default:
      return state
  }
}

export default userReducer
