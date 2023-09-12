"use client"
import React, {useState, useEffect} from 'react'


function Subscribe() {
    const [value, setValue] = useState("");
    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value)
    }
  return (
    <form onSubmit={handleSubmit} className='subscribe'>
        <input type="text" placeholder='Your Email Address' onChange={handleInput} />
        <button type='submit' className='button__secondary'>SUBSCRIBE</button>
    </form>
  )
}

export default Subscribe