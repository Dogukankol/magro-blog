"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { BoxOne } from '@/components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

function Trending() {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const sliderItems = [
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "5 Essential Rules to a Healthy and Happy Life"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "Ceases its New York City Fresh Grocery Business"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "Say Goodbye To Snoring, Say Hello to Sleep"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "Why Growing Old Is Better Than You Think"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "5 Essential Rules to a Healthy and Happy Life"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "Ceases its New York City Fresh Grocery Business"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "Say Goodbye To Snoring, Say Hello to Sleep"
        },
        {
            date: "12 DEC 2019",
            author: "BY JAMES SMITH",
            head: "Why Growing Old Is Better Than You Think"
        },
    ]
    return (

        <div className='container'>
            <span className='trending__title'>
                <FontAwesomeIcon
                    icon={faBoltLightning}
                />
                TRENDING
            </span>
            <Swiper
                slidesPerView={4}
                modules={[Navigation]}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}

            >
                {
                    sliderItems.map((item, key) => (
                        <SwiperSlide key={key}><BoxOne {...item} /></SwiperSlide>

                    ))
                }
            </Swiper>

            <div className='swiper-actions'>
                <button className='swiper-button-next' ref={navigationNextRef}></button>
                <button className='swiper-button-prev' ref={navigationPrevRef}></button>
            </div>
        </div>
    )
}

export default Trending