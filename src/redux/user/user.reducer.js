import userActionTypes from './user.types'

const initialState = {
  currentUser: null,
  isFetchingUser: false,
  errorMessage: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isFetchingUser: true,
        errorMessage: null,
      }
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isFetchingUser: false,
      }
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isFetchingUser: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}

export default userReducer
