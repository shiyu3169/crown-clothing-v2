import React, { useState } from 'react'
import FormInput from '../utils/form_input/FormInput.js'
import CustomButton from '../utils/custom_button/CustomButton.component.js'
import './Register.scss'
import { signUpStart } from 'redux/user/user.actions.js'
import { connect } from 'react-redux'

const Register = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    signUpStart({ email, password, displayName })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span className='subtitle'>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          handleChange={handleInputChange}
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          handleChange={handleInputChange}
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          handleChange={handleInputChange}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          handleChange={handleInputChange}
        />
        <CustomButton>Sign up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (form) => dispatch(signUpStart(form)),
})

export default connect(null, mapDispatchToProps)(Register)
