import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AuthorWithImage, BadgeFire, SimpleIconText } from '..'

function CategoryBox({ author, head, width = "560", height = "405", description }) {
  return (
    <div className='category-box'>
      <Link href={head}>
        <figure>
          <Image src={`https://dummyimage.com/${width}x${height}/3a3a3a/fff`} width={width} height={height} alt={head} />
        </figure>
      </Link>
      <AuthorWithImage author={author} date="12 DEC 2019" badgeFire />
      <div className="category-box__content">
        <div className="category-box__specs">
          <SimpleIconText><FontAwesomeIcon icon={faEye} /> 1.1K</SimpleIconText>
        </div>
        <p className='category-box__head'>
          {head}
        </p>
        <Link href="#" className='button__secondary'>Read More</Link>


      </div>

    </div>
  )
}

export default CategoryBox