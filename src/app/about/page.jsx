import React from 'react'
import Nav from '../components/Nav'

export const metadata = {
    title: "NextJS About Page",
    description: "This is nextjs about page",  
    keywords: "nextjs, web development, js, react"
  };

function AboutPage() {
  return (
    <div className='container mx-auto'>
        <Nav />
        <hr className='my-3' />
      <h3>About Page</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem soluta dolor eaque voluptate quis dolores. Itaque laborum distinctio saepe laudantium vero corrupti, excepturi placeat commodi consequatur iusto molestias fugiat dolorem.</p>
    </div>
  )
}

export default AboutPage
