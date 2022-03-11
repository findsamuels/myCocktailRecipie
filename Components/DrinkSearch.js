import React, { useEffect, useState } from 'react'
import { useInput } from '../hooks/useInput'
import Input from './Forms/Input'
import classes from './DrinkSearch.module.scss'
import { useDispatch , useSelector} from 'react-redux'
import { coctailActions } from '../store/cocktailSlice'

const DrinkSearch = () => {

const {favourite} = useSelector(state => state.cocktailReducer)
    
    const {input, changeHandler} = useInput()
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(coctailActions.searchDrink(input))

    },[dispatch, input])

    return (
        <div className={classes.DrinkSearch}>
            <Input onChange={changeHandler} type='text' placeholder='Find your drink: E.g. Apple'  value={input}/>
            
        </div>
    )
}

export default DrinkSearch
