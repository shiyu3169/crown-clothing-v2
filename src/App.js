import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import './App.css'
import { connect } from 'react-redux'
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

const App = ({ currentUser }) => {
  return (
    <div>
      <Header />
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

export default connect(mapStateToProps)(App)
