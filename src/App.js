import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import './App.css'
import { auth, createUserProfileDocument } from './firebase/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import {
  selectAuthLoading,
  selectCurrentUser,
} from 'redux/user/user.selectors.js'
import { createStructuredSelector } from 'reselect'

import Homepage from './pages/homepage/Homepage.component'
import Checkout from 'pages/checkout/Checkout'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import LoginRegister from './pages/LoginRegister/LoginRegister'

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
    return () => unsubscribeFromAuth()
  }, [setCurrentUser])
  return (
    <div>
      <Header signOut={() => auth.signOut} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/login'
          render={() => (currentUser ? <Redirect to='/' /> : <LoginRegister />)}
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  authLoading: selectAuthLoading,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
