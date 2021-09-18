import React, { Component } from 'react'
import CustomButton from '../utils/custom_button/CustomButton'
import FormInput from '../utils/form_input/FormInput'
import './Login.scss'
import { signInWithGoogle } from '../../firebase/firebase'

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  login = (e) => {
    e.preventDefault()

    this.setState({ email: '', password: '' })
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

          <CustomButton>Sign in</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default Login
