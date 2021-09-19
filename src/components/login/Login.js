import React, { Component } from 'react'
import CustomButton from '../utils/custom_button/CustomButton.component'
import FormInput from '../utils/form_input/FormInput'
import { auth, signInWithGoogle } from '../../firebase/firebase'

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  login = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='login'>
        <h2 className='title'>I already have an account</h2>
        <span className='subtitle'>Sign in with your mail and password</span>
        <form onSubmit={this.login}>
          <FormInput
            handleChange={this.handleInputChange}
            name='email'
            type='email'
            value={email}
            label='Email'
            required
          />
          <FormInput
            handleChange={this.handleInputChange}
            name='password'
            type='password'
            value={password}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
