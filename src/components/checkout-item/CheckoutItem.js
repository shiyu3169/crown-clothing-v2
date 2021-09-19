import React from 'react'
import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='name'>&#10005;</span>
    </div>
  )
}

export default CheckoutItem
