import React from 'react'
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton
