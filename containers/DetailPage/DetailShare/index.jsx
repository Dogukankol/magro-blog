import { faFacebookF, faXTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'


function DetailShare() {
  return (
    <div className='detail__share'>
        <span>SHARE</span>
        <ul>
            <li className='detail__share--facebook'><Link href="#"><FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span></Link></li>
            <li className='detail__share--twitter'><Link href="#"><FontAwesomeIcon icon={faXTwitter} /> <span>Twitter</span></Link></li>
            <li className='detail__share--pinterest'><Link href="#"><FontAwesomeIcon icon={faPinterestP} /></Link></li>
        </ul>
    </div>
  )
}

export default DetailShare