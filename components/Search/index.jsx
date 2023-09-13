"use client"
import React, {useState} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search() {
    const [value, setValue] = useState("");

    const handleInput = (event) => {
        setValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(value) {
            console.log(value);
        }
    }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input type="type" placeholder='Search Again' onChange={handleInput} />
                <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}

export default Search