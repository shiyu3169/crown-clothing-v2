import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import { auth, createUserProfileDocument } from './firebase/firebase'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  signOut = async () => {
    await auth.signOut()
    this.setState({
      currentUser: null,
    })
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser} signOut={this.signOut} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/login' component={LoginRegister} />
        </Switch>
      </div>
    )
  }
}

export default App
