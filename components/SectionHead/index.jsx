import React from 'react'

function SectionHead({text="FASHION"}) {
  return (
    <div className='section-head'>
      <span>{text}</span>
    </div>
  )
}

export default SectionHead