import React, { useEffect } from 'react'
import Card from './Card'
import classes from './DrinksUi.module.scss'
import Icon from '../UI/Icon'
import { Favorite } from '@mui/icons-material'
import {useRouter} from 'next/router'
import { useDispatch } from 'react-redux'
import {coctailActions} from '../../store/cocktailSlice'
import Image from 'next/image'
const DrinksUi = (props) => {

const router = useRouter()
const dispatch = useDispatch()



  const onAddtoFavourite = (drinkId, drinkTitle, drinkImg, route) => {

const favouriteDrink = {
  drinkId,
  drinkTitle,
  drinkImg,
  route
}



dispatch(coctailActions.addToFavourite(favouriteDrink))

  }

  const goToAlchohol = () => {
    router.push(props.route)
}
  return (


<div className={classes.Drink} key={props.drinkid}  {...props} >
<Card>
  <div  className={classes.DrinkUi}>
  <Image key={props.drinkid}
                objectFit='fill'
                className={classes.drinkimg}
                src={props.drinkimg}
                alt={props.drinktitle}
                placeholder='blur'
                blurDataURL="data:..."
                layout='fill'
                onClick={goToAlchohol} />
                <h3>{props.drinktitle}</h3>
                <div onClick={() => onAddtoFavourite(props.drinkid,  props.drinktitle, props.drinkimg, props.route )} className={classes.addToFavourite}>
                <Icon  icon={Favorite} color='white' fontSize='large' className={classes.SearchIcon}/> 
                <p className={classes.favouriteText}>Add to favourite</p>
                </div>
  </div>
                
               
  </Card>
</div>

  )
}

export default DrinksUi