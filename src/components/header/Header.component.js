import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo/crown.svg'
import { connect } from 'react-redux'
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
import { signOutStart } from 'redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
