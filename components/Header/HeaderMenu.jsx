import Link from 'next/link'
import React from 'react'


function HeaderMenu({isOpen}) {
    const menuList = ["HOME", "ENTERTAINMENT", "FASHION", "BUSINESS", "TEACH", "SPORTS", "CONTACT"];
    console.log(isOpen)
    return (
        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`.trim()}>
            <ul>
                {
                    menuList.map((item, key) => (

                        <li key={key}>
                            <Link href="#" >{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default HeaderMenu