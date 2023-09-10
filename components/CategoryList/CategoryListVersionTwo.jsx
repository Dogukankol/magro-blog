import { Box, SectionHead, Tabs, TabSwitcher, TabContent } from '@/components'
import React from 'react'
import { BadgeArrowBottom } from '../Badge';

export default function CategoryListVersionTwo() {
    const magazineProp = [{
        date: "12 DEC 2019",
        image: true,
        author: "BY JAMES SMITH",
        head: "Custom Design You’ll Love our Global.",
        width: "370",
        height: "500"
    }];

    const magazineItems = [
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "100",
            height: "110",
            head: "Gives Emerging Markets Free Sales Platform"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "100",
            height: "110",
            head: "Can Stop Wasting $161B of Food a Year"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "100",
            height: "110",
            head: "Athletes will Not Be Playing in the Rio Olympics"
        },
        {
            date: "12 DEC 2019",
            image: true,
            author: "BY JAMES SMITH",
            width: "100",
            height: "110",
            head: "European Snowboard Trails New Ever"
        }
    ]
    return (
        <section className='category__two'>
            <div className="container">
                <SectionHead text="ELECTRONIC" />
                <div className="category__two__list">
                    <div className="category__two__grid">
                        {
                            magazineProp.map((item, key) => (
                                <Box className="box__large" key={key} {...item} />
                            ))
                        }
                        {
                            magazineItems.map((item, key) => (
                                <Box key={key} {...item} />
                            ))
                        }
                    </div>

                    <div className="category__two__grid">
                        {
                            magazineItems.map((item, key) => (
                                <Box key={key} {...item} />
                            ))
                        }

                        {
                            magazineProp.map((item, key) => (
                                <Box className="box__large" key={key} {...item} />
                            ))
                        }
                    </div>

                    <div className="category__two__grid">
                        <Tabs>
                            <div className="tabs__head tabs__head__arrow">
                                <TabSwitcher tabId={0}>
                                    LATEST
                                </TabSwitcher>
                                <TabSwitcher tabId={1}>
                                    TRENDING
                                </TabSwitcher>
                                <TabSwitcher tabId={2}>
                                    VIDEOS
                                </TabSwitcher>
                            </div>
                            <div className="tabs__content">
                                <TabContent id={0}>
                                    {
                                        magazineItems.map((item, key) => (
                                            <Box key={key} {...item} />
                                        ))
                                    }
                                </TabContent>
                                <TabContent id={1}>
                                    {
                                        magazineItems.map((item, key) => (
                                            <Box key={key} {...item} />
                                        ))
                                    }
                                </TabContent>
                                <TabContent id={2}>
                                    {
                                        magazineItems.map((item, key) => (
                                            <Box key={key} {...item} />
                                        ))
                                    }
                                </TabContent>
                            </div>
                        </Tabs>
                    </div>
                </div>

            </div>
        </section>
    )
}