import React from 'react'
import Footerbar from "../components/Footerbar";
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import Projectblock from '../components/Projectblock';

const Project = () => {
  return (
    <>
      <Navbar />
      <Header title='Projects' ImageNew="./AboutUs.webp"></Header>
      <div className='max-w-[1200px] py-9 mx-auto grid gap-[20px] grid-cols-1 justify-items-center md:grid-cols-2  md:gap-[30px] lg:grid-cols-3 lg:gap-[60px]'>
        <Projectblock url="/Improved-Cookstove-Distribution-Phase-I" Image={"./Project/project1.jpg"} name={"Improved Cookstove Distribution Phase-I"} Tag={"Project"} short_description={"Climate Detox Private Limited is launching Phase III of its project aimed at promoting sustainable cooking practices and reducing greenhouse gas emissions in rural areas of Rajasthan, India. "} />
        <Projectblock url="/Improved-Cookstove-Distribution-Phase-II" Image={"./Project/Project2.jpg"} name={"Improved Cookstove Distribution Phase-II"} Tag={"Project"} short_description={"Climate Detox Private Limited is launching Phase III of its project aimed at promoting sustainable cooking practices and reducing greenhouse gas emissions in rural areas of Rajasthan, India. "} />
        <Projectblock url="/Improved-Cookstove-Distribution-Phase-III" Image={"./Project/project3.jpg"} name={"Improved Cookstove Distribution Phase-III"} Tag={"Project"} short_description={"Climate Detox Private Limited is launching Phase III of its project aimed at promoting sustainable cooking practices and reducing greenhouse gas emissions in rural areas of Rajasthan, India. "} />
      </div> <Footerbar />
    </>
  )
}

export default Project
