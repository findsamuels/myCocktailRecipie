
import React from 'react'
import Card from '../../Components/UI/Card'
import classes from './DrinkTypeUi.module.scss'
import Image from 'next/image'
import Icon from '../UI/Icon'
import { CheckCircle } from '@mui/icons-material'
const DrinkTypeUi = props => {
  return (
      <div className={classes.DrinkTypeUi}>
<Card structure='noPadding'>
    <div className={classes.drinkTypeRow}>

       <img className={classes.drinkImage} alt={props.drinkName} src={props.drinkImg}/>
      
    
<div className={classes.ingredientInstructions}>
    <h4>{props.drinkName}</h4>
    <ul>
        <h3>Ingredients</h3>

        {props.ingredient1 && <li> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span> {props.ingredient1  }</li>}
        {props.ingredient2 &&       <li> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient2  }</li>}
        {props.ingredient3 &&         <li> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient3  }</li>}
        {props.ingredient4 &&   <li> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient4 }</li>}
      
        {props.ingredient5 && <li> <span><Icon icon={CheckCircle} color='brown' fontSize='small' className={classes.SearchIcon}/> </span>{props.ingredient5}</li> }
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