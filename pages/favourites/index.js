
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../../Components/UI/Card'
import classes from './index.module.scss'
import Button from '../../Components/UI/Button'
import {useRouter}from 'next/router'
import Image from 'next/image'
import { coctailActions } from '../../store/cocktailSlice'



const Favourites  = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    const favourite = JSON.parse(localStorage.getItem("favourites"));
    dispatch(coctailActions.loadFavourite(favourite))
  },[dispatch])

  const router = useRouter()

const {favourite} = useSelector(state => state.cocktailReducer)


const onRemoveFromFavourite = (drinkId,drinkTitle,drinkImg) => {

  const favouriteDrink = {
    drinkId,
    drinkTitle,
    drinkImg
  }
  dispatch(coctailActions.removeFromFavourite(favouriteDrink))
}

const onGoToDrink = (routes) => {
router.push(routes)
}
let favouriteDrinks;

  favouriteDrinks = favourite.map(fav => {

    return(
      <div className={classes.favourite}  key={fav.drinkId}>
<Card  >
          <Image
          className={classes.favouriteImage} 
             placeholder='blur'
             blurDataURL="data:..."
             layout='fill'
          onClick={() => onGoToDrink(fav.route)} src={fav.drinkImg} alt={fav.drinkTitle}/>
          
         <div className={classes.favandbutton}>
         <h4>{fav.drinkTitle}</h4>
        <Button onClick={() => onRemoveFromFavourite(fav.drinkId,
  fav.drinkTitle,
  fav.drinkImg)} >Remove</Button>
         </div>
       

       

        </Card>
      </div>
        
    )
  })


  return (
    <div className={classes.FavouriteDrinks} >
      <h3 className={classes.favouriteHeading}>Your selected favourite Drinks </h3>

      <div className={classes.favourites}>
      
      { favourite.length > 0 ? favouriteDrinks: <p className={classes.favouritelist}>Your favourite drink list is empty</p>}
  
</div>
    </div>
    
  )
}

export default Favourites 