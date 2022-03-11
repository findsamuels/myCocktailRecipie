import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import DrinkTypeUi from '../../Components/UI/DrinkTypeUi'
const AlchoholType = props => {

    const router = useRouter()
    const query = router.query


    const drinkInfo = Object.values(props.drinkById)
    const newDrink = drinkInfo.reduce(dri => dri)


    const mappedDrink = newDrink.map(newd => {

        return(
<DrinkTypeUi
        key={newd.idDrink}
        drinkId={newd.idDrink}
       drinkImg={newd.strDrinkThumb}
       drinkName={newd.strDrink}
       ingredient1={newd.strIngredient1 || ''}
       ingredient2={newd.strIngredient2 || ''}
       ingredient3={newd.strIngredient3 || ''}
       ingredient4={newd.strIngredient4 || ''}
       ingredient5={newd.strIngredient5 || ''}
       instruction={newd.strInstructions}
       />
        )
    })


    return mappedDrink
}

export default AlchoholType

export const getServerSideProps = async({query}) => {
const drinkId = query.alchoholType
    const drinkById = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })

    return{
        props: {
            drinkById,

        }
    }
}




