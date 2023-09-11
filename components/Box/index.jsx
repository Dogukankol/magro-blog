import React from 'react';
import Link from 'next/link';
import Date from '../Date';
import Author from '../Author';
import Image from 'next/image';
import { BadgeArrowRight, BadgeArrowRounded } from '../Badge';

export function Box({ className, image, badgeArrow, badgeArrowRounded, date, author, head, width = "888", height = "630" }) {
    return (
        <div className={`box ${className ? className : ""}`.trim()}>
            {image && <Link href={head}><figure><Image src={`https://dummyimage.com/${width}x${height}/3a3a3a/fff`} width={width} height={height} full="true" alt={head} /></figure></Link>}
            {badgeArrowRounded && <BadgeArrowRounded text={badgeArrowRounded} />}
            <div className="box__content">
                <div className="box__specs">
                    {badgeArrow && <Link href={badgeArrow}><BadgeArrowRight text={badgeArrow} /></Link>}  {date && <Link href={date}><Date>{date}</Date></Link>} {author && <Link href={author}><Author text={`/ ${author}`} /></Link>}
                </div>
                <p className='box__head'>
                    <Link href={head}>{head}</Link>
                </p>
            </div>
        </div>
    )
}