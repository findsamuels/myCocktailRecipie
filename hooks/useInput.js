import { useState } from "react"


export const useInput = () => {

    const [input, dispatchInput] = useState('')


    const changeHandler = (event) => {

        dispatchInput(event.target.value)

        console.log(event.target.value)

    }


    return{
input,
changeHandler
    }
}
