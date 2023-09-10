import { Box, SectionHead, Tabs, TabSwitcher, TabContent } from '@/components'
import React from 'react'
import { BadgeArrowBottom } from '../Badge';

export default function CategoryListVersionTwo() {
    const magazineItems = [
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "210",
            head: "Discovering Sydney’s Must-See Attractions"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "210",
            head: "Five Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "210",
            head: "Swimming the Crystal Waters of the Blue Lagoon"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "348",
            head: "How to Prevent and Treat Knee and Ankle Pain"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "348",
            head: "Ceases its New York City Fresh Grocery Business"
        },

        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "370",
            height: "210",
            head: "Discovering Sydney’s Must-See Attractions"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "210",
            head: "Five Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "ENTARTEINMEN",
            width: "370",
            height: "210",
            head: "Swimming the Crystal Waters of the Blue Lagoon"
        },
    ]
    return (
        <section className='category__five'>
            <div className="container">
                <SectionHead text="MORE NEWS" />
                <div className="category__five__list">
                    {
                        magazineItems.map((item, key) => (
                            <Box key={key} {...item} />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}