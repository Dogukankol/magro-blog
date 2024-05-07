import { faHandHoldingMedical, faNewspaper, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ActionWidget() {
  return (
    <div className='action__widget'>
        <div className="action__widget__col">
            <a href="">
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                <span>ÜYE OLMAK İSTİYORUM</span>
            </a>
        </div>
        <div className="action__widget__col">
            <a href="">
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                <span>YAYINLARA ABONE OLMAK İSTİYORUM</span>
            </a>
        </div>
        <div className="action__widget__col">
            <a href="">
                <FontAwesomeIcon icon={faHandHoldingMedical}></FontAwesomeIcon>
                <span>BAĞIŞ YAPMAK İSTİYORUM</span>
            </a>
        </div>
    </div>
  )
}

export default ActionWidget