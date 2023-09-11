import Image from 'next/image'
import React from 'react'
import WorryImg from '@/assets/images/emojis/worry.png'
import KissImg from '@/assets/images/emojis/kiss.png'
import AngryImg from '@/assets/images/emojis/angry.png'
import HugImg from '@/assets/images/emojis/hug.png'
import LoveImg from '@/assets/images/emojis/love.png'

export function DetailReaction({ text, imageUrl, reactionCounter }) {
    return (
        <div className="detail__reactions__item">
            <span>{reactionCounter}</span>
            <div className="detail__reactions__item__emoji">
                <figure>
                    <Image src={imageUrl} width={50} height={50} alt={text} />
                </figure>
            </div>
            <p>{text}</p>
        </div>
    )
}

export function DetailReactionList() {
    const reactionList = [
        {
            imageUrl: WorryImg,
            text: "Worry",
            reactionCounter: "2k"
        }, {
            imageUrl: KissImg,
            text: "Kiss",
            reactionCounter: "2k"
        }, {
            imageUrl: AngryImg,
            text: "Angry",
            reactionCounter: "2k"
        }, {
            imageUrl: HugImg,
            text: "Hug",
            reactionCounter: "2k"
        }, {
            imageUrl: LoveImg,
            text: "Love",
            reactionCounter: "2k"
        },
    ]

    return (
        <div className="detail__reactions">
            <h4>WHAT’S YOUR REACTION</h4>
            <div className="detail__reactions__list">
                {
                    reactionList.map((item, key) => (
                        <DetailReaction key={key} {...item} />
                    ))
                }
            </div>

        </div>
    )
}