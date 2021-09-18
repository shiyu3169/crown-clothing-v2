import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/icons/logo/crown.svg'
import './Header.scss'

const Header = ({ currentUser, signOut }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/login'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
