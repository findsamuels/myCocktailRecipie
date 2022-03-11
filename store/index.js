import {configureStore} from '@reduxjs/toolkit'
import cocktailReducer from './cocktailSlice'

const store = configureStore({


    reducer:{
        cocktailReducer: cocktailReducer
    }
})

export default store