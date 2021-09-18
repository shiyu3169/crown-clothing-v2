import React from "react"
import "./FormInput.scss"

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="input-group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? (
        <label className={`${props.value ? "shrink" : ""} form-label`}>
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
