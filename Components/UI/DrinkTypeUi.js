
import React from 'react'
import Card from '../../Components/UI/Card'
import classes from './DrinkTypeUi.module.scss'
import Image from 'next/image'
import Icon from '../UI/Icon'
import { CheckCircle } from '@mui/icons-material'
const DrinkTypeUi = props => {
  return (
      <div key={props.drinkId} className={classes.DrinkTypeUi}>
<Card structure='noPadding'>
    <div className={classes.drinkTypeRow}>

       <img className={classes.drinkImage} alt={props.drinkName} src={props.drinkImg}/>
      
    
<div className={classes.ingredientInstructions}>
    <h4>{props.drinkName}</h4>
    <ul>
        <h3>Ingredients</h3>

        {props.ingredient1 && <li key={props.ingredient1}> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span> {props.ingredient1  }</li>}
        {props.ingredient2 &&       <li key={props.ingredient2}> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient2  }</li>}
        {props.ingredient3 &&         <li key={props.ingredient3}> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient3  }</li>}
        {props.ingredient4 &&   <li key={props.ingredient4}> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient4 }</li>}
      
        {props.ingredient5 && <li key={props.ingredient5}> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient5}</li> }
    </ul>

<div className={classes.instructions}>
<h3>Mixing Instruction</h3>
<p className={classes.instruction}>{props.instruction}</p>
</div>
    
   
</div>
    </div>
      



   </Card>
      </div>
   

  )
}

export default DrinkTypeUi