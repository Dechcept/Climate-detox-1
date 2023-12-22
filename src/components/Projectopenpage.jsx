import React from "react";
import DotSquarepng from "../img/svg/dotsquare.png";
import HalfCircle from "../img/svg/halfcircle.png";
import Img1 from "../img/img/img1.2.jpg";
import Img2 from "../img/img/2.png";
import Img3 from "../img/img/3.png";
import Img4 from "../img/img/4.png";
import WhyClimateDetoxHome from "./WhyClimateDetoxHome";

const Projectopenpage = ({
  title,
  heading,
  descriptionOne,
  descriptionTwo,
  imageUrl,
  isVisible = true,
  isVisibleTwo = true,
}) => {
  return (
    <div className="flex justify-center pt-28 ">
      {/* <div className="pl-4 w-[80%]"> */}
      <div className="pl-4 pt-16vh w-[80%] ">
        {/* <p className="text-[16px] mt-[75px] font-bold text-[#49A078]">
          Project
        </p> */}
        <h4 className="text-[35px] md:text-[40px] lg:text-[54px] font-semibold leading-{76.8} max-w-[80rem] max-sm:text-[25px]">
          Improved Cookstove Distribution Phase -I{" "}
        </h4>

        <div className="grid grid-rows-2 md:grid-rows-2 lg:grid-rows-1  grid-flow-col gap-4 pt-12">
          <div className="row-span-1 pr-10 max-sm:pr-0">
            <div className="flex flex-col mb-12">
              <span className="text-lg">Project Id</span>
              <span className="font-semibold text-lg">3680</span>
            </div>
            <div className="flex flex-col mb-12">
              <span className="text-lg">VCM Registry</span>
              <span className="font-semibold text-lg">VERRA</span>
            </div>
            <div className="flex flex-col mb-12">
              <span className="text-lg">
                Estimated Emission Reductions/annum
              </span>
              <span className="font-semibold text-lg">3,68,478 Tonnes</span>
            </div>
            <div className="flex flex-col text-3xl mb-12">
              <span className="text-lg">No of SDG Addressed</span>
              <span className="font-semibold text-lg">
                04 (SDG 03,05,07,13)
              </span>
            </div>
          </div>

          <div className="row-span-1">
            <div className="text-[28px] md:text-[40px] font-semibold">
              About the Project
            </div>
            <div className="max-w-[60rem] pt-6 tracking-wider text-[#4D4D4D] ">
              Climate Detox Private Limited is initiating Phase I of its project
              aimed at improving the living conditions and reducing greenhouse
              gas emissions in rural areas of Gujarat, India. The project
              focuses on distributing cookstoves, known as Improved Cook Stoves
              (ICS), to households in these underserved regions. By replacing
              traditional cookstoves, which consume substantial amounts of wood,
              with ICS, this project seeks to create a positive impact on both
              the environment and the rural community's well-being.
            </div>
          </div>
        </div>
        <div className="max-w-[1200px]  mx-auto h-auto flex justify-center items-center lg:my-10 font-[Inter]">
          <div className="flex flex-col justify-center gap-10 mt-10  sm:mt-20 ">
            {/* <div className="flex justify-center text-center ">
            <h2 className=" text-[25px] md:text-[40px] font-bold font-['Inter'] ">
              We are <span className="text-[#49A078]">Climate</span> Detox
            </h2>
          </div> */}

            <div className="max-w-[1200px]  h-auto">
              <div className="grid grid-cols-2 relative gap-1 p-3  md:p-3 sm:gap-[11px]  md:grid md:grid-cols-2  lg:grid lg:grid-cols-7  lg:gap-[38px]  ">
                <div className=" hidden lg:block absolute -left-28 -top-28 z-[-1]">
                  <img className="h-[40.7rem]" src={HalfCircle} alt="" />
                </div>
                <div className=" row-span-1 col-span-1 md:row-span-1 md:col-span-1  lg:col-span-2 ">
                  <img
                    src={Img1}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                {/* <div className=" row-span-1 col-span-1 md:row-span-1 md:col-span-1  lg:col-span-2 ">
                <div className=" flex flex-col gap-3 sm:flex sm:flex-col sm:gap-[22px] md:gap-[22px]">
                    <div className="max-w-[450px]">
                      <img
                        className="object-cover w-full h-full"
                        src={Img1}
                        alt=""
                      />
                    </div>
                    <div className="max-w-[450px]">
                      <img
                        className="object-cover w-full h-full"
                        src={Img3}
                        alt=""
                      />
                    </div>
                  </div>
                </div> */}

                <div className="row-span-1 col-span-1 md:row-span-1 md:col-span-1  lg:col-span-2 ">
                  <div className=" flex flex-col gap-3 sm:flex sm:flex-col sm:gap-[22px] md:gap-[22px]">
                    <div className="max-w-[450px]">
                      <img
                        className="object-cover w-full h-full"
                        src={Img2}
                        alt=""
                      />
                    </div>
                    <div className="max-w-[450px]">
                      <img
                        className="object-cover w-full h-full"
                        src={Img3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-2  md:col-span-2 lg:col-span-3 h-auto row-span-1 w-full text-white bg-[#49A078]">
                  <div className="pt-16 px-8 sm:px-10  flex flex-col gap-14">
                    <div>
                      <p className="text-[2rem]">Project Scope</p>
                      <p className="leading-7 ">
                        Under Phase I of this project, Climate Detox Pvt Ltd
                        plans to distribute 50,000 Improved Cook Stoves in the
                        tribal areas of Gujarat, India. These stoves are
                        specially designed to optimize fuel usage, resulting in
                        a significant reduction of greenhouse gas emissions per
                        household.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-7">
          <img className="w-[25%] h-[30rem]" src={Img1} />
          <div className="grid gap-y-1 grid-rows-2">
            <div>
              <img className=" h-[15rem]" src={Img2} />
            </div>
            <div>
              <img className=" h-[15rem]" src={Img3} />
            </div>
          </div>
          <img className="w-[50%] h-[30rem]" src={Img4} />
        </div> */}

        {/* <div className="flex justify-center flex-col"> */}
        <div className="pt-20 flex flex-col items-center">
          <h1 className="text-[28px] md:text-[40px] font-semibold">
            Objectives
          </h1>
          <h3 className="text-[1.2rem] m-2 max-w-[70rem] text-center text-[#4D4D4D]">
            The primary objective of this project is to combat climate change by
            mitigating greenhouse gas emissions caused by inefficient cooking
            practices. By distributing Improved Cook Stoves, the project aims to
            achieve the following outcomes:
          </h3>
        </div>
        <div>
          <div className="max-2xl-screen  mx-auto h-auto flex justify-center items-center lg:my-10 font-[Inter]">
            <div className="flex flex-col justify-center mt-10  sm:mt-20 ">
              <div className="max-w-[1220px]  h-auto">
                <div className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col m-8 gap-6">
                  <div className="grid-col-2   h-auto row-span-1 w-full text-white bg-[#49A078]">
                    <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
                      <div>
                        <div>
                          <h4 className="cursur-pointer font-bold text-white ">
                            Greenhouse Gas <br /> Reduction
                          </h4>
                        </div>
                        <p className="pt-2 ">
                          The use of Improved Cook Stoves will result in
                          significantly higher thermal efficiency, leading to
                          reduced fuelwood consumption and, consequently, a
                          substantial decrease in greenhouse gas emissions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid-col-2   h-auto row-span-1 w-full text-white bg-[#4D4D4D]">
                    <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
                      <div>
                        <div>
                          <h4 className="cursur-pointer font-bold text-white ">
                            Health and Well being
                          </h4>
                        </div>
                        <p className="pt-2 ">
                          Traditional cookstoves produce substantial smoke,
                          leading to respiratory health issues among the rural
                          population. By promoting the use of ICS, the project
                          aims to improve air quality and reduce health risks
                          associated with indoor air pollution
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid-col-2   h-auto row-span-1 w-full text-white bg-[#49A078]">
                    <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
                      <div>
                        <div>
                          <h4 className="cursur-pointer font-bold text-white ">
                            Time Efficiency
                          </h4>
                        </div>
                        <p className="pt-2 ">
                          With the introduction of Improved Cook Stoves,
                          beneficiaries will spend less time collecting
                          firewood. This time-saving will enable them to focus
                          on caring for their families, engaging in productive
                          work, and other meaningful activities
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid-col-2   h-auto row-span-1 w-full text-white bg-[#4D4D4D]">
                    <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
                      <div>
                        <div>
                          <h4 className="cursur-pointer font-bold text-white ">
                            Safety
                          </h4>
                        </div>
                        <p className="pt-2 ">
                          The design of Improved Cook Stoves ensures a closed
                          structure, reducing the risk of accidents and
                          providing users and their families with a safer
                          cooking environment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col m-8 gap-6 text-white pt-16 ">
          <div className="bg-green row-span-1 p-7 pb-16 ">
            <h1 className="text-[1.5rem] font-bold">Greenhouse Gas Reduction</h1>
            <h3 className="pt-5 text-[1.2rem]">The use of Improved Cook
              Stoves will result in
              significantly higher
              thermal efficiency, leading
              to reduced fuelwood
              consumption and,
              consequently, a
              substantial decrease in
              greenhouse gas emissions</h3>
          </div>
          <div className="bg-gray-700 row-span-1 p-7 pb-16 ">
            <h1 className="text-[1.5rem] font-bold">Health and Well being</h1>
            <h3 className="pt-5 text-[1.2rem]">Traditional cookstoves
              produce substantial
              smoke, leading to
              respiratory health issues
              among the rural
              population. By promoting
              the use of ICS, the project
              aims to improve air quality
              and reduce health risks
              associated with indoor air
              pollution</h3>
          </div>
          <div className="bg-green row-span-1 p-7 pb-16">
            <h1 className="text-[1.5rem] font-bold">Time Efficiency</h1>
            <h3 className="pt-5 text-[1.2rem]">With the introduction of
              Improved Cook Stoves,
              beneficiaries will spend
              less time collecting
              firewood. This timesaving will enable them to
              focus on caring for their
              families, engaging in
              productive work, and
              other meaningful
              activities</h3>
          </div>
          <div className="bg-gray-700 row-span-1 p-7 pb-16" >
            <h1 className="text-[1.5rem] font-bold">Safety</h1>
            <h3 className="pt-5 text-[1.2rem]">The design of Improved
              Cook Stoves ensures a
              closed structure, reducing
              the risk of accidents and
              providing users and their
              families with a safer
              cooking environment.</h3>
          </div>
        </div> */}

        <div>
          <h1 className="text-[2.5rem] font-bold pt-20 max-sm:text-[2rem]">
            Expected Impact
          </h1>
          <h3 className="text-[1.2rem]  pt-5 w-[70%] text-[#4D4D4D] max-sm:w-full ">
            The successful implementation of this project is anticipated to
            yield several positive impacts:
          </h3>
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 pt-20">
          <div className="w-full md:w-1/2">
            <h1 className="text-[2rem] font-bold">
              Emission Reductions
            </h1>
            <h3 className="text-lg pt-5 text-gray-700">
              With an estimated annual emission reduction of 3,68,478 tonnes,
              the project will contribute significantly to climate change
              mitigation efforts (SDG 13 Climate Action).
            </h3>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-[2rem] font-bold">
              Improved Health
            </h1>
            <h3 className="text-lg pt-5 text-gray-700">
              By reducing indoor air pollution and smoke, the project aims to
              alleviate respiratory health issues, particularly among women and
              children, and enhance the overall well-being of the rural
              population (SDG 3 Good Health and Well-being).
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 pt-20">
          <div className="w-full md:w-1/2">
            <h1 className="text-[2rem] font-bold">
              Enhanced Livelihoods
            </h1>
            <h3 className="text-lg pt-5 text-gray-700">
              By saving time spent on collecting firewood, beneficiaries can
              invest their energy in more productive endeavors, leading to
              improved livelihoods and economic opportunities (SDG 5 Gender
              Equality).
            </h3>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-[2rem] font-bold">
              Sustainable Development
            </h1>
            <h3 className="text-lg pt-5 text-gray-700">
              The adoption of Improved Cook Stoves promotes sustainable
              practices by conserving natural resources and protecting the
              environment (SDG 7 Affordable and Clean Energy).
            </h3>
          </div>
        </div>

        <div>
          <h1 className="text-[3rem] font-bold pt-20 max-sm:text-[2rem]">
            Conclusion
          </h1>
          <h3 className="text-[1.2rem]  pt-5 w-[70%] text-[#4D4D4D]  max-sm:w-full">
            Through Phase I of the Improved Cookstove Distribution Project,
            Climate Detox Private Limited aims to make a significant
            contribution to climate change mitigation while positively impacting
            the lives of the rural community in Gujarat. By promoting cleaner
            and more efficient cooking practices, the project seeks to enhance
            environmental sustainability, health, and overall quality of life
            for the beneficiaries.
          </h3>
        </div>

        <div className="pb-10">
          <h1 className="text-[3rem] font-bold pt-20 max-sm:text-[2rem]">
            Project link
          </h1>
          <a
            className="text-[1.2rem] pt-5 break-words text-blue-500 underline font-normal max-sm:text-[0.7rem]"
            href="https://registry.verra.org/app/projectDetail/VCS/3680"
          >
            https://registry.verra.org/app/projectDetail/VCS/3680
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectopenpage;
