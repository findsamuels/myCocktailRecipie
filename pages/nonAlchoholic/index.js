import axios from 'axios'
import React from 'react'
import {useRouter} from 'next/router'
import classes from './index.module.scss'
import DrinksUi from '../../Components/UI/DrinksUi'
import Card from '../../Components/UI/Card'

import DrinkSearch from '../../Components/DrinkSearch'
import { useSelector } from 'react-redux'

const NonAlchoholic = (props) => {
 



    const searchedValue = useSelector(state=>state.cocktailReducer.searchedValue)

    const noAlchoholicValues = Object.values(props.nonAlchoholic)
   
    const alch = noAlchoholicValues.reduce(alch => alch)

    let mappedDrinks;
    if(searchedValue !== ''){
        mappedDrinks = alch.filter(item => item.strDrink.toLowerCase().includes(searchedValue.toLowerCase())).map(myAlchohol => {
            return(
           
                <DrinksUi key={myAlchohol.idDrink}  drinkimg={myAlchohol.strDrinkThumb} route={`/nonAlchoholic/${myAlchohol.idDrink}`} drinkid={myAlchohol.idDrink} drinktitle={myAlchohol.strDrink}/>
           
            )
        })
    }
   
   else {mappedDrinks = alch.map(myAlchohol => {

        return(
           
            <DrinksUi key={myAlchohol.idDrink}   drinkimg={myAlchohol.strDrinkThumb} route={`/nonAlchoholic/${myAlchohol.idDrink}`} drinkid={myAlchohol.idDrink} drinktitle={myAlchohol.strDrink}/>
       
        )
    })
   }


    


    return (
        <div className={classes.nonAlchohol}>
            <div className={classes.drinkSearch}>
            <Card color='brown' structure='noRadius' >

                <div className={classes.searchHeading}>
                <h4>Our special Non Alchoholic Cocktails</h4>
                <DrinkSearch/>
                </div>
               

            </Card>
            </div>
            
            <div className={classes.Drinklist}>
            {mappedDrinks}
            </div>
        </div>
    )
}



export default NonAlchoholic

export  const  getStaticProps = async() => {

    const nonAlchoholic = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
    return{
        props: {
           
            nonAlchoholic
        }
    }
}
