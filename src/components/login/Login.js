import React, { useState } from 'react'
import CustomButton from '../utils/custom_button/CustomButton.component'
import FormInput from '../utils/form_input/FormInput'
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from 'redux/user/user.actions'
const Login = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const { email, password } = userCredentials

  const login = async (e) => {
    e.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='login'>
      <h2 className='title'>I already have an account</h2>
      <span className='subtitle'>Sign in with your mail and password</span>
      <form onSubmit={login}>
        <FormInput
          handleChange={handleChange}
          name='email'
          type='email'
          value={email}
          label='Email'
          required
        />
        <FormInput
          handleChange={handleChange}
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
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(Login)
