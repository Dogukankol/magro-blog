import Link from 'next/link'
import React from 'react'


function Tags({text, className}) {
  return (
    <span className={`tag ${className ? className : ""}`.trim()}><Link href={text}>{text}</Link></span>
  )
}

export default Tags