"use client"
import React, {useState, useEffect} from 'react'
import HeaderSlider from './HeaderSlider'
import HeaderSocialMedia from './HeaderSocialMedia'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Logo from "@/assets/images/logo@2x.png"
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='header'>
      <div className='header__stripe'>
        <div className='container'>
          <HeaderSlider />
          <HeaderSocialMedia />
        </div>
      </div>
      <div className='header__main'>
        <div className="container">
          <div className="header__main__upper">
            <button className='header__menu--opener' onClick={handleOpen}><FontAwesomeIcon icon={faBars} />MENU</button>
            <Link href="/">
            <Image src={Logo}  alt="Logo" className='header__logo' />

            </Link>
            <HeaderSearch />
          </div>
          <div className="header__main__bottom">
            <HeaderMenu isOpen={isOpen} />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header