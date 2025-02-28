"use client"
import { SectionHead, VideoFull, VideoThumbnail } from '@/components'
import React, { createContext, useContext, useState } from 'react'

export const VideoContext = createContext();

function TopVideos() {
    const [activeVideo, setActiveVideo] = useState({
        head: "Under Marketing Chief Bruno Cardinali, Popeyes Is Eating", time: "20 MIN AGO"
    });

    const setVideo = video => {
        setActiveVideo(video);
        console.log(activeVideo)
    };

    const videoList = [{
        head: "He Speaks 11 Languages - 7 Tricks To Learn Any",
        time: "20 MIN AGO",
        author: "ROKISTAN WAINS 1",
        videoSrc: "https://www.youtube.com/embed/uYQR5ktq7W0"
        
    },
    {
        head: "Goodbye To Snoring, SayHello to Sleep",
        time: "30 MIN AGO",
        author: "ROKISTAN WAINS 2",
        videoSrc: "https://www.youtube.com/embed/9xwazD5SyVg"

    },
    {
        head: "Discovering Sydney’s Must - See Attractions",        
        time: "10 MIN AGO",
        author: "ROKISTAN WAINS 3",
        videoSrc: "https://www.youtube.com/embed/D0UnqGm_miA"

    }
    ]



    return (
        <section className='top-videos'>
            <div className="container">
                <SectionHead tag="h2" text="Top Videos" />
                <VideoContext.Provider  value={{ activeVideo, setVideo }}>
                    <div className="top-videos__list">
                        <div className="top-videos__full">
                            {activeVideo && <VideoFull {...activeVideo} /> }
                        </div>
                        <div className="top-videos__thumbnails">
                            {
                                videoList.map((item, key) => (

                                    <VideoThumbnail {...item} key={key} VideoContext  />
                                ))
                            }
                        </div>
                    </div>
                </VideoContext.Provider>
            </div>
        </section>
    )
}

export default TopVideos