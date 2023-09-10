import { Box, SectionHead, Tabs, TabSwitcher, TabContent } from '@/components'
import React from 'react'

export default function CategoryListVersionTwo() {

    const magazineItems = [
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "371",
            height: "480",
            head: "Apollo Astronauts Harmed by Deep Space Radiation"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "371",
            height: "180",
            head: "Say Goodbye To Snoring, Say Hello to Sleep"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "371",
            height: "180",
            head: "11 Languages – 7 Tricks To Learn Any Language"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "371",
            height: "480",
            head: "How America Can Stop Wasting $161B of Food a Year"
        }
    ]
    return (
        <section className='category__three'>
            <div className="container">
                <SectionHead text="BUSINESS" />
                <div className="category__three__list">
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