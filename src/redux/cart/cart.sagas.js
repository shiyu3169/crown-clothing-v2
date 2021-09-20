import { all, call, takeLatest, put } from 'redux-saga/effects'
import userActionTypes from 'redux/user/user.types'
import { clearCart } from './cart.actions'

function* clearUserCart() {
  yield put(clearCart())
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearUserCart)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
