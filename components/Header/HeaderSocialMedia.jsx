import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';


function HeaderSocialMedia() {
  return (
    <div className='header__social-media'>
      <span>FOLLOW US:</span>
      <div className='header__social-media__list'>
        <ul>
          <li className='header__social-media__list--facebook'><Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
          <li className='header__social-media__list--twitter'><Link href="#"><FontAwesomeIcon icon={faXTwitter} /></Link></li>
          <li className='header__social-media__list--instagram'><Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderSocialMedia