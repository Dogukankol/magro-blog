"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from 'next/link';
import { faStar } from "@fortawesome/free-regular-svg-icons";

function HeaderSlider() {
  const sliderItems = [
    {
      title: "1 World War II altered the political alignment and social structure of the world 1"
    },
    {
      title: "2 World War II altered the political alignment and social structure of the world 2"
    },
    {
      title: "3 World War II altered the political alignment and social structure of the world 3"
    },
    {
      title: "4 World War II altered the political alignment and social structure of the world 4"
    }
  ]

  return (
    <>
      <span>
        <FontAwesomeIcon
          icon={faStar}
          style={{ fontSize: 15, }}
        />
        TRENDING:
      </span>
      <Swiper
        slidesPerView={1}
        direction='vertical'
        loop='true'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
          sliderItems.map((item, key) => (
            <SwiperSlide key={key}><Link href={`magazine-detail/${item.title}`.toLowerCase().replaceAll(" ", "-")}>{item.title}</Link></SwiperSlide>

          ))
        }
      </Swiper>
    </>
  )
}

export default HeaderSlider