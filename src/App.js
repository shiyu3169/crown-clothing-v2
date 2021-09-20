import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from 'redux/user/user.selectors.js'

import Homepage from './pages/homepage/Homepage.component'
import Checkout from 'pages/checkout/Checkout'
import Shop from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import { checkUserSession } from 'redux/user/user.actions'

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
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

export default App
