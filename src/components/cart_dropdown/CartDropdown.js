import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../utils/custom_button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart_item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router'
import { toggleCartHidden } from 'redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const goToCheckOut = () => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goToCheckOut}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
