import { SectionHead, VideoFull, VideoThumbnail } from '@/components'
import React from 'react'

function TopVideos() {
    const videoList = [{
        head: "He Speaks 11 Languages - 7 Tricks To Learn Any"
    },
    {
        head:"Goodbye To Snoring, SayHello to Sleep"
    },
    {
        head: "Discovering Sydney’s Must - See Attractions"
    }
]
    return (
        <section className='top-videos'>
            <div className="container">
                <SectionHead tag="h2" text="Top Videos" />
                <div className="top-videos__list">
                    <div className="top-videos__full">
                        <VideoFull />
                    </div>
                    <div className="top-videos__thumbnails">
                        {
                            videoList.map((item, key) => (

                                <VideoThumbnail {...item} key={key} />
                            ))
                        }
                    </div>
                </div></div>
        </section>
    )
}

export default TopVideos