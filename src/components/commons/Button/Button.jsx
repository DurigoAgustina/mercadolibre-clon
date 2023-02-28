import React from 'react'
import './_Button.scss'

const Button = ({variant, width, children}) => {
  return (
    <button className={`button button-${variant} button-${width}`}>{children}</button>
  )
}

export default Button