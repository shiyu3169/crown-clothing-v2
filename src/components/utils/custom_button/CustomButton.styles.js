import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const inverTedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
const googleSignInStyles = css`
  background-color: #4385f4;
  color: white;
  border: none;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }
  if (props.inverted) {
    return inverTedButtonStyles
  }
  return buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.05rem;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyles}
`
