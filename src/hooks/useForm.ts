
import  { useState } from 'react'

type useFormType = [
    values:any,
    handleInputChange:any,
    reset:Function
]
export const useForm = (initialState= {}):useFormType => {
    const [values, setValues] = useState(initialState)
        const reset = ()=>{
            setValues(initialState)
        }
        const handleInputChange =({target}:React.ChangeEvent<HTMLInputElement>)=>{
            setValues({
                ...values,
                [target.name]:target.value
                
            })
    }
    return [values, handleInputChange,reset]
}
