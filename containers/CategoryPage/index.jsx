import { CategoryBox } from '@/components'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function CategoryListC() {
  const magazineSingle = [{
    head: "Apollo Astronauts Harmed by Deep Space Radiation",
    description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
    author: "BY JAMES SMITH",
  },{
    head: "Apollo Astronauts Harmed by Deep Space Radiation",
    description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
    author: "BY JAMES SMITH",
  },{
    head: "Apollo Astronauts Harmed by Deep Space Radiation",
    description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
    author: "BY JAMES SMITH",
  },{
    head: "Apollo Astronauts Harmed by Deep Space Radiation",
    description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
    author: "BY JAMES SMITH",
  },{
    head: "Apollo Astronauts Harmed by Deep Space Radiation",
    description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
    author: "BY JAMES SMITH",
  },{
    head: "Apollo Astronauts Harmed by Deep Space Radiation",
    description: "Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lobortis faucibus. Lorem ipsum dolor sit amet, conse ctetur adipis Viales.",
    author: "BY JAMES SMITH",
  },
];
  return (
    <section className='category-page'>
      <div className="container">
        <h1>Top Posts</h1>

        <div className="category-page__list">
          {
            magazineSingle.map((item, key) => (
              
              <CategoryBox key={key} {...item} />
            ))
          }
        </div>

        <button className='button__load-more'><FontAwesomeIcon icon={faSpinner} />Load More</button>
      </div>
    </section>
  )
}

export default CategoryListC