import Link from 'next/link'
import React from 'react'
import { Box, OtherCategories } from '..'
import Logo from "@/assets/images/logo@2x.png"
import Image from 'next/image'
import Subscribe from '../Subscribe'

function Footer() {
  const magazineItems = [
    {
      date: "4 DAYS AGO",
      image: true,
      width: "100",
      height: "80",
      head: "Gives Emerging Markets Free Sales Platform"
    },
    {
      date: "4 DAYS AGO",
      image: true,
      width: "100",
      height: "80",
      head: "Can Stop Wasting $161B of Food a Year"
    },
    {
      date: "4 DAYS AGO",
      image: true,
      width: "100",
      height: "80",
      head: "Athletes will Not Be Playing in the Rio Olympics"
    },
    {
      date: "4 DAYS AGO",
      image: true,
      width: "100",
      height: "80",
      head: "European Snowboard Trails New Ever"
    }
  ]
  return (
    <footer className='footer'>
      <div className="container">
        <div className="category__two__list">
          <div className="category__two__grid">
            <div className="footer__head">
              EDITOR PICK'S
            </div>
            {
              magazineItems.map((item, key) => (
                <Box key={key} {...item} />
              ))
            }
          </div>
          <div className="category__two__grid">
            <div className="footer__head">
              LATEST ARTICLES
            </div>
            {
              magazineItems.map((item, key) => (
                <Box key={key} {...item} />
              ))
            }
          </div>
          <div className="category__two__grid">
            <div className="footer__head">
              POPULAR CATEGORIES
            </div>
            <OtherCategories />

          </div>


        </div>

        <div className="footer__introduction-subscribe">
          <div className="footer__introduction">
            <figure className='footer__logo'>
              <Image src={Logo} alt="Logo" />
            </figure>
            <p>Magro is your news, entertainment, music & fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.
              <b>Contact Us: <Link href="mailto:info@youremail.com">info@youremail.com</Link></b>
            </p>
          </div>

          <div className="footer__subscribe">
            <Subscribe />
          </div>
        </div>

        <div className="footer__copyright">
          <label>© 2019 Verizon Media. All rights reserved</label>
          <ul>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Advertisement</Link></li>
            <li><Link href="#">About Us</Link></li>
          </ul>
        </div>

      </div>

    </footer>
  )
}

export default Footer