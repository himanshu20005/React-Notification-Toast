import React from 'react'
import styles from './Button.module.css'
const Button = ({children, onClick, type}) => {
  return (
    <input type="button" value={children} onClick={onClick} className={`${styles.button} ${styles[type]}`} />
  )
}

export default Button