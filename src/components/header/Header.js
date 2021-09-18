import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/icons/logo/crown.svg'
import './Header.scss'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { setCurrentUser } from '../../redux/user/user.actions'
import CartIcon from '../cart_icon/CartIcon'
import CartDropdown from '../cart_dropdown/CartDropdown'

const Header = ({ currentUser, hidden }) => {
  const signOut = () => {
    auth.signOut()
  }
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
