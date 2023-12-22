import React from 'react'
import DotSquarepng from '../img/svg/dotsquare.png'
import HalfCircle from "../img/svg/halfcircle.png"
import Navbar from '../components/Navbar'
import Footerbar from '../components/Footerbar'
import Projectopenpage from '../components/Projectopenpage'
import ProjectThreePage from '../components/ProjectThreePage'

const ProjectThree = ({ title, heading, descriptionOne, descriptionTwo, imageUrl, isVisible = true, isVisibleTwo = true }) => {
  return (

    <div>
      <Navbar />
      <ProjectThreePage />
      <Footerbar />
    </div>
  )
}

export default ProjectThree