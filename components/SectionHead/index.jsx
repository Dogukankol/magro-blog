import React from 'react'
import { BadgeArrowBottom } from '../Badge'

function SectionHead({text="FASHION"}) {
  return (
    <div className='section-head'>
      <BadgeArrowBottom text={text} tag="h2" />
    </div>
  )
}

export default SectionHead