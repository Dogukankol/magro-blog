import { BoxFull } from '@/components'
import React from 'react'

function TopRated() {
    const magazineSingle = [
        {
            authorDate: true,
            authorImg: true,
            topRated: true,
            image: true,
            viewCount: true,
            badgeFire: true,
            width: "350",
            height: "360",
            head: "Apollo Astronauts Harmed by Deep Space Radiation",
            description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, consectetur adipis Viales.",
            author: "BY JAMES SMITH",
        },
        {
            authorDate: true,
            authorImg: true,
            topRated: true,
            image: true,
            viewCount: true,
            badgeFire: true,
            width: "350",
            height: "360",
            head: "Apollo Astronauts Harmed by Deep Space Radiation",
            description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, consectetur adipis Viales.",
            author: "BY JAMES SMITH",
        },
        {
            authorDate: true,
            authorImg: true,
            topRated: true,
            image: true,
            viewCount: true,
            badgeFire: true,
            width: "350",
            height: "360",
            head: "Apollo Astronauts Harmed by Deep Space Radiation",
            description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, consectetur adipis Viales.",
            author: "BY JAMES SMITH",
        },
    ];
    return (
        <div className="top-rated">
            <h4>Top Viral Post</h4>
            {
                magazineSingle.map((item, key) => (
                    <BoxFull key={key} {...item} />
                ))
            }
        </div>
    )
}

export default TopRated