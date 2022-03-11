import Card from '../UI/Card'
import React from 'react'
import classes from './ServicePreview.module.scss'

import Link from 'next/link'
const ServicePreview = () => {

    return (
        <div className={classes.ServicePreview}>
<div className={classes.ckList}>
<h1>Our Cocktails Variety</h1>
            <p>Pick a drink and we will show you how to make it </p>
</div>


<div className={classes.Preview}>

<Link href='/alchoholic'>
<div className={classes.Service}>
                <Card structure='noPadding'>
                <div className={classes.DrinkType}>
                <img src='/img/alchoholic.jpg' alt='service1'/>
                <h3>Alchoholic</h3>
                </div>
                </Card>
                </div>
                </Link>

<Link href="/nonAlchoholic"> 
<div className={classes.Service}>
<Card structure='noPadding' >
    <div className={classes.DrinkType}>

    <img src='/img/nonalchohol.jpg' alt='service1'/>
                <h3>Non Alchoholic</h3>
    </div>

   
                
                
                </Card>
</div>

                </Link>
              
</div>
            
        </div>
    )
}

export default ServicePreview
