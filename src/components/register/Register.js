import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.js'
import FormInput from '../utils/form_input/FormInput.js'
import CustomButton from '../utils/custom_button/CustomButton.component.js'
import './Register.scss'

export class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    const { displayName, email, password, confirmPassword } = this.state
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span className='subtitle'>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            handleChange={this.handleInputChange}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            handleChange={this.handleInputChange}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            handleChange={this.handleInputChange}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            handleChange={this.handleInputChange}
          />
          <CustomButton>Sign up</CustomButton>
        </form>
      </div>
    )
  }
}

export default Register
