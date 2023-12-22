import React from 'react'
import DotSquarepng from '../img/svg/dotsquare.png'
import HalfCircle from "../img/svg/halfcircle.png"
import Navbar from '../components/Navbar'
import Footerbar from '../components/Footerbar'
import Projectopenpage from '../components/Projectopenpage'

const ProjectOpenPage = ({ title, heading, descriptionOne, descriptionTwo, imageUrl, isVisible = true, isVisibleTwo = true }) => {
  return (

    <div>
      <Navbar />
      <Projectopenpage />
      <Footerbar />
    </div>
  )
}

export default ProjectOpenPage