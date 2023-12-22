import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// import Product1 from "../img/Cookstove.jpg";

const Projectblock = ({
  id,
  Image,
  Tag,
  name,
  author,
  short_description,
  url,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="grid grid-cols-1 gap-5 px-4 my-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
        <div className="text-black bg-white text-center m-10 bg-cover" >
          <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-2xl pt-[300px] pb-[200px]" style={{ backgroundImage: 'url("/img/back1.png");background-repeat:no-repeat;'} }>
        
            
            <p className="text-xl text-center text-white ">{title}</p>
            <p className="text-xl text-center text-white">{Description}</p>
          </div>
        </div>
      </div> */}
      <div
        key={id}
        className="  w-[340px] sm:w-[360px]  h-auto font-['Inter]  p-10"
      >
        <div onClick={() => navigate(url)}>
          <div className="flex flex-col gap-5 ">
            <img src={Image} className="object-fit w-full" alt="" />
          </div>
          <div className=" my-3">
            <div
              className={`px-3 font-blod w-fit rounded-md text-[12px] text-center text-white ${
                Tag === "Article" ? "bg-black" : "bg-[#49A078]"
              }`}
            >
              {Tag}
            </div>
          </div>
          <div className="">
            <h1 className="text-[17px] font-bold text-[#121212]">{name}</h1>
            {/* <p className='mt-2 font-semibold text-[#4D4D4D]'>
              By <span className='text-[#7b7575]'>{author}</span>

            </p> */}
          </div>
          {/* <div className='text-[#4D4D4D] text-left' >{short_description}</div> */}

          <div className="flex justify-center">
            {/* <Link to={"/Improved-Cookstove-Distribution-Phase-I"} > */}
            <span className="flex gap-[20px] cursor-pointer items-center font-bold text-[#49A078] m-auto">
              <p>Read more</p>
              <span>
                <FaArrowRight />
              </span>
            </span>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectblock;
