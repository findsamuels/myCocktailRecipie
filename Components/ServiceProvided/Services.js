import React from 'react'
import ServiceList from './ServiceList'
import classes from './Services.module.scss'
const Services = () => {
    return (
        <div className={classes.Services}> 
            <h1>Service Provided</h1>
            <p>Below is a list of our most popular service provided</p>
            <ServiceList/>
        </div>
    )
}

export default Services
