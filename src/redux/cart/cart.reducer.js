import cartActionTypes from './cart.types'

const initialState = {
  hidden: true,
}

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }

    default:
      return state
  }
}

export default cart
