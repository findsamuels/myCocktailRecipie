import React from 'react'
import classes from './Banner.module.scss'
import ResturantSearch from './ResturantSearch'
const Banner = () => {
    return (
        <div style={{backgroundImage: "url('img/cocktail.jpg')"}} className={classes.Banner}>
            <ResturantSearch/>
        </div>
    )
}

export default Banner
