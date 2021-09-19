import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = 'pk_test_5mj3e8Jani6JHt2R11r2vw0800v7lKVikc'
  const onToken = (token) => {
    console.log('toten')
    alert('Test Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
