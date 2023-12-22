import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import imgForestSmoke from "../img/imgForestSmoke.webp"
// import imgWindWill from "../img/imgWindWill.webp"
import imgRivertree from "../img/imgRivertree.webp";
import HalfCircle from "../img/svg/halfcircle.png";
import { Link } from "react-router-dom";

// const mystyle = {
//   @media only screen and (max-width: 768px) {
//     .Dct-home {
//      display
//     }
// };

const ClimateDetoxImgHome = () => {
  return (
    <div>
      <div className="max-w-[1200px]  mx-auto h-auto flex justify-center items-center lg:my-10 font-[Inter]">
        <div className="flex flex-col justify-center gap-10 mt-10  sm:mt-20 ">
          <div className="flex justify-center text-center ">
            <h2 className=" text-[25px] md:text-[40px] font-bold font-['Inter'] ">
              We are <span className="text-[#49A078]">Climate</span> Detox
            </h2>
          </div>

          <div className=" max-w-[1200px]  h-auto px-6">
            <div className="flex">
              <div className=" hidden lg:block absolute -left-28 -top-28 z-[-1]">
                <img className="h-[40.7rem]" src={HalfCircle} alt="" />
              </div>
              <div className="grid grid-cols-2 gap-5 ">
                <div className="flex h-cover col-span-2  max-md:w-cover sm:col-span-1">
                  {/* <img src={imgRivertree} className="object-cover w-full h-full" alt="" /> */}
                  {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
                  {/* <ReactPlayer
                  className=""
                  url={"https://www.youtube.com/watch?v=LvXkWptDrFs"}
                /> */}
                  <iframe
                    className="w-full h-cover max-md:h-[332px]"
                    width=""
                    height=""
                    src="https://www.youtube.com/embed/LvXkWptDrFs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="col-span-2 sm:col-span-1  text-white bg-[#49A078]">
                  <div className="pt-8 px-8 pb-8 flex flex-col gap-14">
                    <div>
                      <p className="leading-7 ">
                        We launched Climate Detox to help the deteriorating
                        state of our planet while also aiding companies and
                        people to reach their neutral goal of reducing carbon
                        emissions and footprints.
                        <br />
                        <br />
                        The government's implementation tax on carbon emissions
                        is a step in the right direction.
                      </p>
                    </div>

                    <div>
                      <Link
                        to="/aboutus"
                        aboutus
                        className=" cursor-pointer flex gap-5 pb-5 items-center"
                      >
                        {" "}
                        <h4 className="cursur-pointer font-bold text-white ">
                          Know More About Us{" "}
                        </h4>
                        <span>
                          {" "}
                          <FaArrowRight />{" "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateDetoxImgHome;
