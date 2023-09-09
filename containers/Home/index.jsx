import { SectionHead } from '@/components'
import React from 'react'
import Fashion from './Fashion'
import HotAgenda from './HotAgenda'
import Trending from './Trending'


function HomeC() {
  return (
    <>
      <section className='trending'>
        <Trending />
      </section>
      <section className='hot-agenda'>
        <HotAgenda />
      </section>
      <section className='category__version-one'>
        <div className='container'>
          <SectionHead text="FASHION" />
          <Fashion />
        </div>
      </section>
    </>
  )
}

export default HomeC