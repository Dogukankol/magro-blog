import React from 'react'
import Link from 'next/link'

export function BoxOne({ date="12 DEC 2019", author="BY JAMES SMITH", head="5 Essential Rules to a Healthy and Happy Life" }) {
    return (
        <div className='box__without-image'>
            <div className="box__author-date">
                <Link href={date}><span>{date}</span></Link> / <Link href={author}>{author}</Link> 
            </div>
            <p>
            <Link href={head}>{head}</Link> 
            </p>
        </div>
    )
}