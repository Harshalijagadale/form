// import React from 'react'
// import './FormInput.css'
// function FormInput({placeholder,setUserName}){
//     return(
//         <>
//         <div className='formInput'>
//             {/* <label >Username</label> */}
//             <input placeholder={placeholder}
//             onChange={(e)=>setUserName(e.target.value)}/>
//         </div>
//         </>
//     )
// }
// export default FormInput


// import React from 'react'
// import './FormInput.css'
// function FormInput({placeholder,setUserName,name}) {
//   return (
//    <>
//    <div className='formInput'>
//     {/* <label>UserName</label> */}
//     <input name={name} placeholder={placeholder}
//     onChange={(e)=>setUserName(e.target.value)}/>
//    </div>
//    </>
//   )
// }
// export default FormInput

// import React from 'react'
// import './FormInput.css'
//  function FormInput(props) {
//   let {label,onchange,id,...inputprops} =props
//   return(
//     <>
//      <div className='formInput'>
//      <label>{label}</label>
//      <input {...inputprops}
//     onChange={onChange}/>
//    </div>
//     </>
//   )
//  }
//  export default FormInput



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