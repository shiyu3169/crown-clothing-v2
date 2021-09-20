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

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
})

export const signUpStart = (form) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: form,
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
})

export const signUpFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
})
