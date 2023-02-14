import React, { useState } from 'react'


function PhoneInput() {
    const[value,setValue]=useState('')
    const handleInput=(e)=>{
        const formattedPhoneNumber=PhoneFormat(e.target.value)
        setValue(formattedPhoneNumber)
    }


  return (
    <>
   <div className='phone'>
   <h2>Phone Number Formatting</h2>
   <input onChange={(e)=>handleInput(e)} value={value} placeholder='(055)555-7799'/>
   </div>
    
    </>
  )
}

 function PhoneFormat(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g,'');
    const phoneLength = phoneNumber.length;
    if (phoneLength < 4) return phoneNumber;
    if (phoneLength < 7) {
      return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  }
  

export default PhoneInput