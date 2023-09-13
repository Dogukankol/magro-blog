import { faMap, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function ContactInformation() {
    return (
        <div className="contact__information">
            <h2 className="contact__head">
                Get In Touch
            </h2>
            <p>If you are interested in working with us,
                please get in touch.</p>
            <ul>
                <li><FontAwesomeIcon icon={faLocationDot} /> <b>75 South Park Avenue, Melbourne, Australia</b></li>
                <li><FontAwesomeIcon icon={faPhoneVolume} /> <b>8 800 567.890.11 <span>- Central Office</span></b></li>
                <li><FontAwesomeIcon icon={faPaperPlane} /> <b><Link href="mailto:hello@hostmail.com">hello@hostmail.com</Link></b></li>
            </ul>
        </div>
    )
}

export default ContactInformation