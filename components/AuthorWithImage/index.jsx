import Image from 'next/image'
import React from 'react'
import { Date } from '..'
import {BadgeArrowRounded} from '../Badge'

function AuthorWithImage({author, badgeArrowRounded, date}) {
    return (
        <div className="author">
            <figure>
                <Image src={`https://dummyimage.com/50x50/3a3a3a/fff`} width={50} height={50} alt={author} />
                <figcaption>{author} {date && <Date>{date}</Date>}</figcaption>
            </figure>
            {badgeArrowRounded && <BadgeArrowRounded text={badgeArrowRounded} />}

        </div>
    )
}

export default AuthorWithImage