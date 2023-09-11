import { BadgeArrowBottom, Box, OtherCategories, TabContent, Tabs, TabSwitcher, Tags, VideoFull } from '@/components'
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DetailAuthor from './DetailAuthor'
import DetailHero from './DetailHero'
import { DetailReactionList } from './DetailReaction'
import DetailShare from './DetailShare'
import TopRated from './TopRated'

function DetailPageC() {
  const tags = ["Wordpress", "New York", "Looks", "Good Advice"];
  const magazineItems = [
    {
      date: "12 DEC 2019",
      image: true,
      author: "BY JAMES SMITH",
      width: "100",
      height: "110",
      head: "Gives Emerging Markets Free Sales Platform"
    },
    {
      date: "12 DEC 2019",
      image: true,
      author: "BY JAMES SMITH",
      width: "100",
      height: "110",
      head: "Can Stop Wasting $161B of Food a Year"
    },
    {
      date: "12 DEC 2019",
      image: true,
      author: "BY JAMES SMITH",
      width: "100",
      height: "110",
      head: "Athletes will Not Be Playing in the Rio Olympics"
    },
    {
      date: "12 DEC 2019",
      image: true,
      author: "BY JAMES SMITH",
      width: "100",
      height: "110",
      head: "European Snowboard Trails New Ever"
    }
  ]
  return (
    <section className="detail">
      <DetailHero />
      <div className="container">
        <div className="detail__left">
          <div className="detail__content">
            <p>Colorés, envahissants, gluants… Avec ses petits monstres, Andrew Rae envisage le smartphone comme un portail entre le virtuel et le réel, duquel s’échappent des formes de vie inconnues. Pour réaliser sa série intitulée “Phone Buddies”, l’illustrateur établi à Londres a associé son talent à celui du photographe Ruskin Kyle afin d’ancrer ses créations dans le réel. Ce dernier a immortalisé des passants dans les rues londoniennes qui gardaient leurs yeux rivés sur l’écran de leur smartphone, avant qu’Andrew Rae n’ajoute ses monstres sur les images. Pop et colorée, leur collaboration invite à réfléchir sur le lien que nous entretenons avec nos écrans.</p>
            <h3 className='detail__content__quote'>
              “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat”
            </h3>
            <p>Colorés, envahissants, gluants… Avec ses petits monstres, Andrew Rae envisage le smartphone comme un portail entre le virtuel et le réel, duquel s’échappent des formes de vie inconnues. Pour réaliser sa série intitulée “Phone Buddies”, l’illustrateur établi à Londres a associé son talent à celui du photographe Ruskin Kyle afin d’ancrer ses créations dans le réel. Ce dernier a immortalisé des passants dans les rues londoniennes qui gardaient leurs yeux rivés sur l’écran de leur smartphone, avant qu’Andrew Rae n’ajoute ses monstres sur les images. Pop et colorée, leur collaboration invite à réfléchir sur le lien que nous entretenons avec nos écrans.</p>
            <figure>
              <Image src="https://dummyimage.com/770x503/" width={770} height={503} alt="Detail Image 1" />
            </figure>

            <p>Colorés, envahissants, gluants… Avec ses petits monstres, Andrew Rae envisage le smartphone comme un portail entre le virtuel et le réel, duquel s’échappent des formes de vie inconnues. Pour réaliser sa série intitulée “Phone Buddies”,</p>

            <h4>Unordered List</h4>
            <ul>
              <li>At vero eos et accusamus et iusto odio dignissimos. </li>
              <li>Et harum quidem rerum facilis est et expedita distinctio. </li>
              <li>Nam libero tempore, cum soluta nobis est eligendi optio.</li>
            </ul>

            <h4>#Vertical image</h4>
            <figure>
              <Image src="https://dummyimage.com/770x503/" width={770} height={503} alt="Detail Image 1" />
            </figure>
            <p>Colorés, envahissants, gluants… Avec ses petits monstres, Andrew Rae envisage le smartphone comme un portail entre le virtuel et le réel, duquel s’échappent des formes de vie inconnues. Pour réaliser sa série intitulée “Phone Buddies”,</p>

            <h4>Self hosted responsive video</h4>
            <VideoFull />
            <p>Colorés, envahissants, gluants… Avec ses petits monstres, Andrew Rae envisage le smartphone comme un portail entre le virtuel et le réel, duquel s’échappent des formes de vie inconnues. Pour réaliser sa série intitulée “Phone Buddies”, l’illustrateur établi à Londres a associé son talent à celui du photographe Ruskin Kyle afin d’ancrer ses créations dans le réel. Ce dernier a immortalisé des passants dans les rues londoniennes qui gardaient leurs yeux rivés sur l’écran de leur smartphone, avant qu’Andrew Rae n’ajoute ses monstres sur les images. Pop et colorée, leur collaboration invite à réfléchir sur le lien que nous entretenons avec nos écrans.</p>

          </div>

          <div className="detail__tags">
            <Tags text="TAGS" className="tag--red" />
            {
              tags.map((item, key) => (
                <Tags key={key} text={item} />
              ))
            }
          </div>

          <DetailShare />
          <DetailReactionList />
          <DetailAuthor />
          <TopRated />
        </div>

        <div className="detail__right">
          <div className="detail__right__author">
            <div className="detail__right__head">
              <BadgeArrowBottom text="Author" />
            </div>

            <div className="detail__right__author__content">
              <Link href="#">
                <figure>
                  <Image src="https://dummyimage.com/240x240/3a3a3a/fff" width={240} height={240} alt="Albert Shephard" />
                </figure>
                <span className='badge__author-star'><FontAwesomeIcon icon={faStar} /></span>
              </Link>

              <h5>Albert Shephard</h5>
              <p>Lorem ipsum dolor sit amet, consec ales elit vitae lobortis faucibus. Lorem consectetur adipis Viales.</p>

              <div className="detail__right__author__social-media">
                <div className='header__social-media__list'>
                  <ul>
                    <li className='header__social-media__list--facebook'><Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                    <li className='header__social-media__list--twitter'><Link href="#"><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                    <li className='header__social-media__list--instagram'><Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                  </ul>
                </div>

                <Link href="#" className='button__primary'>VIEW POSTS</Link>
              </div>
            </div>

          </div>

          <div className="detail__other-categories">

            <div className="detail__right__head">
              <BadgeArrowBottom text="OTHER CATEGORIES" />
            </div>
            <OtherCategories />
          </div>

          <div className="detail__most-popular">
            <div className="category__two__list">
              <div className="category__two__grid">
              <Tabs>
                  <div className="tabs__head tabs__head__arrow">
                    <TabSwitcher tabId={0}>
                      LATEST
                    </TabSwitcher>
                    <TabSwitcher tabId={1}>
                      TRENDING
                    </TabSwitcher>
                  </div>
                  <div className="tabs__content">
                    <TabContent id={0}>
                      {
                        magazineItems.map((item, key) => (
                          <Box key={key} {...item} />
                        ))
                      }
                    </TabContent>
                    <TabContent id={1}>
                      {
                        magazineItems.map((item, key) => (
                          <Box key={key} {...item} />
                        ))
                      }
                    </TabContent>
                  </div>
                </Tabs>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailPageC