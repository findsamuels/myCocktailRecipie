import axios from 'axios'
import React, { useEffect } from 'react'
import classes from './index.module.scss'
import Card from '../../Components/UI/Card'
import DrinksUi from '../../Components/UI/DrinksUi'
import DrinkSearch from '../../Components/DrinkSearch'
import {useSelector } from 'react-redux'



const Alchoholic = props => {

    const searchedValue = useSelector(state=>state.cocktailReducer.searchedValue)

    const alchoholValues = Object.values(props.alchoholic)
   
    const alch = alchoholValues.reduce(alch => alch)

    let mappedDrinks;
    if(searchedValue !== ''){
        mappedDrinks = alch.filter(item => item.strDrink.toLowerCase().includes(searchedValue.toLowerCase())).map(myAlchohol => {
            return(
           
                <DrinksUi key={myAlchohol.idDrink}  drinkimg={myAlchohol.strDrinkThumb} route={`/alchoholic/${myAlchohol.idDrink}`} drinkid={myAlchohol.idDrink} drinktitle={myAlchohol.strDrink}/>
           
            )
        })
    }
   
   else {mappedDrinks = alch.map(myAlchohol => {

        return(
           
            <DrinksUi key={myAlchohol.idDrink} drinkimg={myAlchohol.strDrinkThumb} route={`/alchoholic/${myAlchohol.idDrink}`} drinkid={myAlchohol.idDrink} drinktitle={myAlchohol.strDrink}/>
       
        )
    })
   }

    return (
        <div className={classes.Alchoholic}>
        <div className={classes.drinkSearch}>
          <Card color='brown' structure='noRadius' >
          
          <div className={classes.searchHeading}>
          <h4>Our special Alchoholic Cocktails</h4>
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
export default Alchoholic


export  const  getStaticProps = async() => {

    const alchoholic = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })

    return{
        props: {
            alchoholic,

        }
    }
}



