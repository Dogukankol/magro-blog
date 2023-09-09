import React from 'react';
import Link from 'next/link';
import Date from '../Date';
import Author from '../Author';
import Image from 'next/image';
import { BadgeArrowRight, BadgeArrowRounded } from '../Badge';

function BoxFull({ image, badgeArrow, badgeArrowRounded, date, author, head, width = "570", height = "374", description }) {
    return (
        <div className='box--full'>
            {image && <figure><Image src={`https://dummyimage.com/${width}x${height}/3a3a3a/fff`} width={width} height={height} full="true" alt={head} /></figure>}
            <div className="box__content">
                <div className="box__specs">
                    {badgeArrow && <BadgeArrowRight text={badgeArrow} />}  {date && <Link href={date}><Date text={date} /></Link>}
                </div>
                <p className='box__head'>
                    <Link href={head}>{head}</Link>
                </p>
                <p className="box__description">
                    {description}
                </p>

                <div className="box__author">
                    <figure>
                        <Image src={`https://dummyimage.com/50x50/3a3a3a/fff`} width={50} height={50} alt={author} /> <figcaption>{author}</figcaption>
                    </figure>
                    {badgeArrowRounded && <BadgeArrowRounded text={badgeArrowRounded} />}

                </div>
            </div>
        </div>
    )
}

export default BoxFull