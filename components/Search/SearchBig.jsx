"use client"
import React from 'react'
import HeaderSearch from '../Header/HeaderSearch'
import { Search } from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function SearchBig() {

  const onCloseBigSearch = () => {
    const bigSearch = document.querySelector(".search__full");
    bigSearch.classList.remove("active");
  }
  return (
    
    <div className="search__full">
        <Search />
        <button className='search__full__btn-close' onClick={onCloseBigSearch}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
    </div>
  )
}

export default SearchBig