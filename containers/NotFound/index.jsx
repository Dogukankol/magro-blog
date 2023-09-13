import React from 'react'
import Image from 'next/image'
import errorImg from '@/assets/images/404.png'
import Link from 'next/link'
import { Search } from '@/components'

function NotFoundC() {
  return (
    
    <section className='not-found'>
      <div className="container">
        <figure>
          <Image src={errorImg} alt="Error Image"></Image>
        </figure>
        <h1>Opps! You have some problems</h1>
        <p>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
        <Link href="/" className='button__secondary'>PLEASE RETURN TO HOMEPAGE</Link>
        <Search />
      </div>
    </section>
  )
}

export default NotFoundC