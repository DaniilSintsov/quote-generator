import React from 'react'
import classes from './Button.module.css'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick}
            className={classes.newQuote}>{children}</button>
  )
}

export default Button
