import React from 'react'
import {CategoryListVersionOne, CategoryListVersionTwo, CategoryListVersionThree, CategoryListVersionFour, CategoryListVersionFive} from '@/components'
import HotAgenda from './HotAgenda'
import Trending from './Trending'
import TopVideos from './TopVideos'


function HomeC() {
  return (
    <>
      <section className='trending'>
        <Trending />
      </section>
      <section className='hot-agenda'>
        <HotAgenda />
      </section>
      <CategoryListVersionOne />
      <CategoryListVersionTwo />
      <TopVideos />
      <CategoryListVersionThree />
      <CategoryListVersionFour />
      <CategoryListVersionFive />

    </>
  )
}

export default HomeC