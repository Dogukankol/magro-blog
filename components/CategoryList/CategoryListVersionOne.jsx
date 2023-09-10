import { Box, BoxFull, SectionHead } from '@/components'
import React from 'react'

export default function CategoryListVersionOne({sectionHeadProp, magazineSingleProp, magazineItemsProp}) {
    const sectionHead = sectionHeadProp || "FASHION" 
    const magazineSingle = magazineSingleProp || [{
        date: "12 DEC 2019",
        image: true,
        badgeArrowRounded: true,
        badgeArrow: "FASHION",
        head: "Apollo Astronauts Harmed by Deep Space Radiation",
        description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
        author: "BY JAMES SMITH",
        authorImg: true
    }];

    const magazineItems = magazineItemsProp || [
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "FASHION",
            width: "270",
            height: "240",
            head: "Apollo Astronauts Harmed by Deep Space Radiation"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "FASHION",
            width: "270",
            height: "240",
            head: "Mauritius: Five Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "FASHION",
            width: "270",
            height: "240",
            head: "Ceases its New York City Fresh Grocery Business"
        },
        {
            date: "12 DEC 2019",
            image: true,
            badgeArrow: "FASHION",
            width: "270",
            height: "240",
            head: "Apollo Astronauts Harmed by Deep Space Radiation"
        }
    ]
    return (
        <section className='category__one'>
            <div className="container">
                <SectionHead text={sectionHead} />
                {
                    magazineSingle.map((item, key) => (
                        <BoxFull key={key} {...item} />
                    ))
                }

                <div className="category__one__list">
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