import React from 'react'
import classes from './Input.module.scss'
const Input = props => {


    const onSubmitForm =(event) => {
event.preventDefault()
    }
    return (
        <form className={`${classes.Form}`} onSubmit={onSubmitForm} >
<input 
       
       className={`${classes.Input}`}
       {...props}
       />
        </form>
       
    )
}

export default Input
