import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    alchoholic: [],
    nonAlchoholic: [],
    loading: false,
    favourite: [],
    searchedValue: ''
  
}

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        alchoholic(state, action){
            const alchoholValues = Object.values(action.payload)
   
    const alch = alchoholValues.reduce(alch => alch)
            state.alchoholic = alch
        },
        nonAlchoholic(state,action){
            state.nonAlchoholic=action.payload
        },
        addToFavourite(state,action){

            const itemExist = state.favourite.find(item => item.drinkId === action.payload.drinkId)
            if(!itemExist){
     
                state.favourite.unshift(action.payload)
                localStorage.setItem('favourites', JSON.stringify(state.favourite))
                
   
            }

        },
        removeFromFavourite(state,action){
            if(state.favourite.length > 0){
           
               const filteredItem =  state.favourite.filter(item => item.drinkId !== action.payload.drinkId)
               state.favourite = filteredItem
               localStorage.setItem('favourites', JSON.stringify(filteredItem))
            }
            else return
        },
        loadFavourite(state,action){

            state.favourite = action.payload
            
        },
        searchDrink(state, action){
            const filterDrinks = state.favourite.filter(item => item.drinkTitle.toLowerCase().includes(action.payload.toLowerCase()))

            state.favourite = filterDrinks
            state.searchedValue = action.payload
        }
       
    }
})

export const coctailActions = cocktailSlice.actions
export default cocktailSlice.reducer