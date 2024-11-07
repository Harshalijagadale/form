



import React, { useState } from 'react'
import './FormInput.css'
export default function FormInput(props) {
  let [focus, setFocus] = useState(false)
    let {label,onChange,errorMessage,...inputProps} = props
    // console.log(errorMessage);

    let handelError = ()=>{
      setFocus(true)
    }
    return (
        <>
            <div className='formInput'>
                <label>{label}</label>
                <input
                    {...inputProps}
                    onChange={onChange} onBlur={handelError}
               focus = {focus.toString()} />
                <span>{errorMessage}</span>

            </div>
        </>
    )
}
