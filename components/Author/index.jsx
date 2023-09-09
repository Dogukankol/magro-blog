import React from 'react'

function Author({text="BY JAMES SMITH"}) {
  return (
    <span className="box__author">{text}</span>
  )
}

export default Author