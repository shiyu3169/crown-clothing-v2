import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import { auth, createUserProfileDocument } from './firebase/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header signOut={this.signOut} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/login' component={LoginRegister} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
