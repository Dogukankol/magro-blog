import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Image from 'next/image'
import React from 'react'
import { AuthorWithImage, BadgeFire, Date, SimpleIconText } from '@/components'

function DetailHero({ head = "Can You Guess What Type Of Music Each Person Is Listening", author = "BY JAWN STAFF", tag="SPORT" }) {
    return (
        <div className="detail__hero">
            <figure>
                <Image src="https://dummyimage.com/1920x794/3a3a3a/fff" width="1920" height="794" alt={head} />
            </figure>

            <div className="detail__hero__content container">
                <div className="detail__hero__favorite"><FontAwesomeIcon icon={faStar} /> <span className='detail__hero__tag'>{tag}</span></div>
                <p className='detail__hero__head'>{head}</p>
                <div className="detail__hero__specs">
                    <AuthorWithImage author={author} />
                    <Date><FontAwesomeIcon icon={faClock} /> October 18, 2020</Date>
                    <BadgeFire />
                    <SimpleIconText><FontAwesomeIcon icon={faEye} /> 1.3K Views</SimpleIconText>
                </div>
            </div>
        </div>
    )
}

export default DetailHero