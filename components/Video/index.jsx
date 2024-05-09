"use client"
import React, { useRef, useEffect, useState, useContext } from 'react'
import Image from 'next/image';
import {VideoContext} from '@/containers/Home/TopVideos'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export function VideoThumbnail({ videoSrc, author, head = "He Speaks 11 Languages – 7 Tricks To Learn Any", time = "20 MIN AGO", width = "200", height = "100" }) {
    const { activeVideo, setVideo } = useContext(VideoContext);
    const handleClick = () => {
        setVideo({head, time, author, videoSrc});
        
    };
    return (
        <div className="video__thumbnail" onClick={handleClick}>
            <figure>
                <Image src={`https://dummyimage.com/${width}x${height}/3a3a3a/fff`} width={width} height={height} alt={head} />
                <span><FontAwesomeIcon icon={faPlay} /></span>
            </figure>
            <div className="video__content">
                <p className='video__head'>{head}</p>
                <p className='video__min'>{time}</p>
            </div>
        </div>
    )
}


export function VideoFull({ videoSrc="https://www.youtube.com/embed/D0UnqGm_miA", head = "Under Marketing Chief Bruno Cardinali, Popeyes Is Eating", time = "20 MIN AGO", author = "ROKISTAN WAINS" }) {
    const videoRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);

    useEffect(() => {
        videoRef.current?.load()
    }, [videoSrc])
    

    const handlePlayVideo = () => {
        videoRef.current.play();
        setIsPlay(true)
    }
    return (
        <div className="video__full">
            {/* <video controls={isPlay} ref={videoRef} poster='https://dummyimage.com/870x542/3a3a3a/fff'>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <iframe width={870} height={542} src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            {/* {
                !isPlay && <button className='video__starter' onClick={handlePlayVideo}><FontAwesomeIcon icon={faPlay} /></button>
            }
            {
                !isPlay &&
                <div className="video__content">
                    <p className='video__head'>{head}</p>
                    <p className='video__specs'><FontAwesomeIcon icon={faYoutube} /> {author} / {time}</p>
                </div>
            } */}

        </div>
    )
}
