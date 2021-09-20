import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo/crown.svg'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase'
import CartIcon from '../cart_icon/CartIcon'
import CartDropdown from '../cart_dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from 'redux/cart/cart.selectors'
import { selectCurrentUser } from 'redux/user/user.selectors'
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './Header.styles'

const Header = ({ currentUser, hidden }) => {
  const signOut = () => {
    auth.signOut()
  }
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/login'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
