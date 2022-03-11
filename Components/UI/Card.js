import React from 'react'
import classes from './Card.module.scss'
const Card = props => {
    return (
        <div className={`${classes.Card} ${classes[props.color] } ${classes[props.structure]}` } {...props} >
            {props.children}
        </div>
    )
}

export default Card
