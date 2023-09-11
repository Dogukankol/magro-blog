import React from 'react';
import Link from 'next/link';
import Date from '../Date';
import Image from 'next/image';
import { BadgeArrowRight, BadgeArrowRounded } from '../Badge';
import { AuthorWithImage, BadgeFire, SimpleIconText } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEye, faPencil } from '@fortawesome/free-solid-svg-icons';



function BoxFull({ image, badgeArrow, badgeArrowRounded, date, author, head, width = "570", height = "374", description, authorImg, authorDate, viewCount, badgeFire, topRated }) {
    return (
        <div className='box__full'>
            {image &&
                <Link href={head}>
                    <figure>
                        <Image src={`https://dummyimage.com/${width}x${height}/3a3a3a/fff`} width={width} height={height} alt={head} />
                    </figure>
                    {
                        topRated &&
                        <span className='badge__top-rated'><FontAwesomeIcon icon={faBolt} /></span>
                    }
                </Link>}
            <div className="box__content">
                <div className="box__specs">
                    {badgeArrow && <BadgeArrowRight text={badgeArrow} />}
                    {date && <Link href={date}><Date>{date}</Date></Link>}
                    {viewCount && <SimpleIconText><FontAwesomeIcon icon={faEye} /> 1.1K</SimpleIconText>}
                    {badgeFire && <BadgeFire />}
                </div>
                <p className='box__head'>
                    <Link href={head}>{head}</Link>
                </p>
                <p className="box__description">
                    {description}
                </p>

                {authorImg &&
                    <AuthorWithImage author={author} badgeArrowRounded={badgeArrowRounded} date={authorDate ? "12 DEC 2019" : false} />
                }
            </div>
        </div>
    )
}

export default BoxFull