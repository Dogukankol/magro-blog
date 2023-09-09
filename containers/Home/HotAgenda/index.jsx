"use client"
import React from 'react'
import { Box } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

function HotAgenda() {
    const sliderItems = [
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Apollo Astronauts Harmed by Deep Space Radiation"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Mauritius: Five Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Ceases its New York City Fresh Grocery Business"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Apollo Astronauts Harmed by Deep Space Radiation"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Mauritius: Five Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Ceases its New York City Fresh Grocery Business"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Apollo Astronauts Harmed by Deep Space Radiation"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Mauritius: Five Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrowRounded: true,
            badgeArrow: "ENTERTAINMENT",
            head: "Ceases its New York City Fresh Grocery Business"
        },
    ]
    return (
        <>
            <div className="hot-agenda__slider">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop="true"
                >
                    {
                        sliderItems.map((item, key) => (
                            <SwiperSlide key={key}><Box {...item} /></SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
            {
                sliderItems.slice(0, 2).map((item, key) => (
                    <div className='hot-agenda__single' key={key} >
                        <Box {...item} width="496" />
                    </div>
                ))
            }
        </>
    )
}

export default HotAgenda