"use client"
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HeaderSearch() {
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

    const openBigSearch = (event) => {
        const bigSearch = document.querySelector(".search__full");
        bigSearch.classList.add("active");
    }

    return (
        <form className="header__search" onClick={openBigSearch}>
            <input type="text" placeholder="SEARCH" onChange={handleInput} />
            <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    )
}

export default HeaderSearch