import { Tags, VideoFull } from '@/components'
import Image from 'next/image'
import React from 'react'
import DetailHero from './DetailHero'
import { DetailReactionList } from './DetailReaction'
import DetailShare from './DetailShare'

function DetailPageC() {
  const tags = ["Wordpress", "New York", "Looks", "Good Advice"]
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
        </div>

        <div className="detail__right">

        </div>
      </div>
    </section>
  )
}

export default DetailPageC