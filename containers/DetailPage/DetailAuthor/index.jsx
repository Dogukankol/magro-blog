import Image from 'next/image'
import React from 'react'

function DetailAuthor({author="John Doe"}) {
  return (
    <div className="detail__author">
        <figure>
            <Image src="https://dummyimage.com/123x123/3a3a3a/fff" width={123} height={123} alt={author}></Image>
        </figure>
        <div className="detail__author__content">
            <span>Written By</span>
            <h5>{author}</h5>
            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusanda</p>
        </div>
    </div>
  )
}

export default DetailAuthor