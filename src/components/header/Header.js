import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/icons/logo/crown.svg'
import './Header.scss'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { setCurrentUser } from '../../redux/user/user.actions'

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
