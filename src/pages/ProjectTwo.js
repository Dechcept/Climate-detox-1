import React from 'react'
import DotSquarepng from '../img/svg/dotsquare.png'
import HalfCircle from "../img/svg/halfcircle.png"
import Navbar from '../components/Navbar'
import Footerbar from '../components/Footerbar'
import Projectopenpage from '../components/Projectopenpage'
import ProjectTwoPage from '../components/ProjectTwoPage'

const ProjectTwo = ({ title, heading, descriptionOne, descriptionTwo, imageUrl, isVisible = true, isVisibleTwo = true }) => {
  return (

    <div>
      <Navbar />
      <ProjectTwoPage />
      <Footerbar />
    </div>
  )
}

export default ProjectTwo