import { faChevronCircleDown, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'


function HeaderMenu({ isOpen, handleClose }) {
    // const menuList = ["HOME", "ENTERTAINMENT", "FASHION", "BUSINESS", "TEACH", "SPORTS", "CONTACT"];
    const menuList = [{
        category: "HOME",
        href: "/",
        subMenu: [
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
        ]
    },
    {
        category: "ENTERTAINMENT",
        href: "/entertainment",
        subMenu: [
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
        ]
    },
    {
        category: "FASHION",
        href: "/fashion",
        subMenu: [
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
        ]
    },
    {
        category: "BUSINESS",
        href: "/business",
        subMenu: [
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
        ]
    },
    {
        category: "TEACH",
        href: "/teach",
        subMenu: [
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
        ]
    },
    {
        category: "SPORTS",
        href: "/sports",
        subMenu: [
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
            {
                category: "Submenu 1",
                href: "/submenu-1"
            },
        ]
    },
    {
        category: "CONTACT",
        href: "/"
    }
    ]

    const onOpenSubmenu = (event) => {
        event.preventDefault();
        const el = event.target;
        const parent = el.closest("li");
        const wrapper = el.closest("ul");

        if(parent.querySelector("ul")) {
            wrapper.querySelectorAll(".active").forEach(item => {
                item.classList.remove("active")
            });
            parent.classList.add("active");
        }
    }


    return (
        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`.trim()}>
        <button className='header__nav__close' onClick={handleClose}>
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </button>
            <ul>
                {
                    menuList.map((item, key) => (
                        <li key={key}>
                            <React.Fragment key={key}>
                                <Link  href={item.href} >{item.category}</Link>
                                {item.subMenu && <FontAwesomeIcon icon={faChevronDown} onClick={onOpenSubmenu} /> }
                            </React.Fragment>
                            {item.subMenu &&
                                <ul className='header__nav__submenu'>
                                    {
                                        item.subMenu.map((item, key) => (
                                            <Link key={key} href={item.href} >{item.category}</Link>
                                        ))
                                    }
                                </ul>
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default HeaderMenu