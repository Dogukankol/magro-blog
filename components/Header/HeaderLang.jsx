import { faArrowAltCircleDown, faArrowDown, faChevronCircleDown, faChevronDown, faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function HeaderLang() {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const dropdownOpener = () => {
        setIsDropdownActive(!isDropdownActive);
    }
    return (
        <div className='header__language'>
            <button onClick={dropdownOpener}><FontAwesomeIcon icon={faGlobe} /> Dil seçiniz</button>
            <div className={`language__list ${isDropdownActive ? "active" : ""}`}>
                <ul>
                    <li><a href="/tr">Turkish</a></li>
                    <li><a href="/en">English</a></li>
                    <li><a href="/ar">Arabic</a></li>
                    <li><a href="/ru">Russian</a></li>
                </ul>
            </div>
        </div >
    )
}

export default HeaderLang