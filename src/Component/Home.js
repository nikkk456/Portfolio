import React from 'react'
import Certificate from './Certificate'
import Education from './Education'
import Experience from './Experience'
import Project from './Project'

import Skills from './Skills'

const Home = () => {
  return (
    <>
      <Education/>

{/* skills start from here  */}
      <Skills/>

{/* experience start from here  */}
      <Experience/>

{/* Certificates start from here  */}
      <Certificate/>

{/* //Projects start here */}
      <Project/>
    </>
  )
}

export default Home
