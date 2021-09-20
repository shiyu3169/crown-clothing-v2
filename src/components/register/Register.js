import React, { Component } from 'react'
import FormInput from '../utils/form_input/FormInput.js'
import CustomButton from '../utils/custom_button/CustomButton.component.js'
import './Register.scss'
import { signUpStart } from 'redux/user/user.actions.js'
import { connect } from 'react-redux'

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
    const { signUpStart } = this.props
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    signUpStart({ email, password, displayName })
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (form) => dispatch(signUpStart(form)),
})

export default connect(null, mapDispatchToProps)(Register)
