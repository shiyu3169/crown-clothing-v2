import React, { Component } from 'react'
import CustomButton from '../utils/custom_button/CustomButton.component'
import FormInput from '../utils/form_input/FormInput'
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from 'redux/user/user.actions'

class Login extends Component {
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
    const { emailSignInStart } = this.props
    emailSignInStart(email, password)
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    const { googleSignInStart } = this.props
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
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(Login)
