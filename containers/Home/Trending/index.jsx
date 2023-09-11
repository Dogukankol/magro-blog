"use client"
import React, { useRef, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Box } from '@/components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

function Trending() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

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
                ref={sliderRef}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                }}
            >
                {
                    sliderItems.map((item, key) => (
                        <SwiperSlide key={key}><Box {...item} /></SwiperSlide>

                    ))
                }
            </Swiper>

            <div className='swiper-actions'>
                <button className='swiper-button-prev' onClick={handlePrev} ></button>
                <button className='swiper-button-next' onClick={handleNext} ></button>
            </div>
        </div>
    )
}

export default Trending