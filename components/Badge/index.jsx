import React from 'react'
import { faGripfire } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BadgeArrowRounded() {
  return (
    <span className='badge-arrow-rounded'>15</span>
  )
}

export function BadgeArrowRight({ text }) {
  return (
    <span className='badge-arrow-right'>{text}</span>
  )
}


export function BadgeArrowBottom({ text, tag = "span" }) {
  return (
    React.createElement(tag, { className: 'badge-arrow-bottom' }, text)
  )
}

export function BadgeFire() {
  return (
    <div className="badge-fire">
      <FontAwesomeIcon icon={faGripfire} /> 120
    </div>
  )
}
