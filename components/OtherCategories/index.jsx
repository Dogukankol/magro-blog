import Link from 'next/link'
import React from 'react'

function OtherCategories() {
    const otherCategories = ["Architecture", "New Look 2015", "Gadgets", "Mobile and Phones", "Recipes", "Decorating", "Interiors"]

    return (
        <ul className='other-categories'>
            {
                otherCategories.map((item, key) => (
                    <li key={key}><Link href={item}>{item}</Link>  <Link href={item} className="badge__other-categories"><span>26</span></Link></li>
                ))
            }
        </ul>
    )
}

export default OtherCategories