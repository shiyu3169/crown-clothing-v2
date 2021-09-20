import { all, call, takeLatest, put } from 'redux-saga/effects'
import userActionTypes from 'redux/user/user.types'
import { clearCart } from './cart.actions'

export function* clearUserCart() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearUserCart)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
