import React from 'react'
import classes from './Button.module.scss'
const Button = props => {
    return (
        <button className={`${classes.Button} ${props.classname}` } {...props}>
            {props.children}
        </button>
    )
}

export default Button
