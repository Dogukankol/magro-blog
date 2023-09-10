import { Box, SectionHead, Tabs, TabSwitcher, TabContent } from '@/components'
import React from 'react'

export default function CategoryListVersionTwo() {

    const magazineItems = [
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "270",
            height: "270",
            head: "The Best Dining in the Hamptons"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "270",
            height: "270",
            head: "Star Luxury and Wildlife Encounters"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "270",
            height: "270",
            head: "NY Best Summer Dessert Destinations"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "270",
            height: "270",
            head: "How America Can Stop Wasting $161B of Food a Year"
        },
        
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "570",
            height: "570",
            head: "How America Can Stop Wasting $161B of Food a Year"
        }
    ]
    return (
        <section className='category__four'>
            <div className="container">
                <SectionHead text="TECHNICIAN" />
                <div className="category__four__list">
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