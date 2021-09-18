import cartActionTypes from './cart.types'
import { addItemToCard } from './cart.utils'

const initialState = {
  hidden: true,
  cartItems: [],
}

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCard(state.cartItems, payload),
      }
    default:
      return state
  }
}

export default cart
