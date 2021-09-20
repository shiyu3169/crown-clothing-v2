import userActionTypes from './user.types'

export const emailSignInStart = (form) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: form,
})

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
})

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
})
