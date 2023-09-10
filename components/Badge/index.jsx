import React from 'react'

export function BadgeArrowRounded() {
  return (
    <span className='badge-arrow-rounded'>15</span>
  )
}

export function BadgeArrowRight({text}) {
  return (
    <span className='badge-arrow-right'>{text}</span>
  )
}


export function BadgeArrowBottom({text, tag="span"}) {
  return (
    React.createElement(tag, { className: 'badge-arrow-bottom' }, text)
  )
}