import React from 'react'
import Card from './UI/Card'
import classes from './ResturantSearch.module.scss'


const ResturantSearch = () => {
    return (
        <div className={classes.ResturantSearch}>
 <Card >
     <div className={classes.ResturantText}>
     <h1>We have what you need</h1>
           <p>Access to list of perfect drinks and ingredients</p>
     </div>
          
       </Card>
        </div>
      
    )
}

export default ResturantSearch
