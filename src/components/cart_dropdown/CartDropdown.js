import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../utils/custom_button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart_item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
