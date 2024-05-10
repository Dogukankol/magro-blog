"use client"
import { faChevronCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

function Accordion({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`accordion ${isOpen ? "accordion--active" : ""}`}>
            <div className="accordion__title" onClick={toggleAccordion}>
                <span>{title}</span>
                <button className='accordion__button'>
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </button>
            </div>
            <div className="accordion__description">
                {description}
            </div>
        </div>
    )
}

export default Accordion