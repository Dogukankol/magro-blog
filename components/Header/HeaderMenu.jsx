import Link from 'next/link'
import React from 'react'


function HeaderMenu({ isOpen }) {
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
    return (
        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`.trim()}>
            <ul>
                {
                    menuList.map((item, key) => (
                        <li key={key}>
                            <Link href={item.href} >{item.category}</Link>
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