import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footerbar from "../components/Footerbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <Header title="Services" ImageNew="./AboutUs.webp"></Header>
        <div className="pt-20 flex flex-col items-center">
         
          <h3 className="text-[1.2rem] m-2 max-w-[70rem] text-center text-[#4D4D4D]">
           Climate Detox Pvt Ltd is a leading environmental solutions company based in Surat, India, specializing in carbon asset monitoring and carbon offsetting solutions. Established in 2022, our company is committed to addressing the urgent global challenge of climate change by providing innovative and sustainable solutions to individuals and businesses alike.
          </h3>
          <h3 className="text-[1.2rem] m-2 max-w-[70rem] text-center text-[#4D4D4D]">
          At Climate Detox, our mission is to play an instrumental role in the fight against climate change by assisting organizations in managing their carbon footprints responsibly. We aim to foster a low-carbon economy and promote environmental consciousness among our clients, enabling them to reduce their carbon emissions and make a positive impact on the environment.
          </h3>

        </div>
      <div className="max-w-[1440px]  h-auto container">
        <div className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col m-8 gap-6">
          {/* First Row */}
          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#49A078]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Carbon Asset Monitoring
                  </h4>
                </div>
                <p className="pt-2 ">
                  Climate Detox offers state-of-the-art carbon asset monitoring
                  services to track and quantify carbon emissions across various
                  industries. Our team of skilled environmental experts and data
                  analysts utilize cutting-edge technology to measure and assess
                  the carbon footprint of businesses accurately. Through
                  comprehensive monitoring, we help clients identify areas of
                  improvement and implement strategies for emission reduction.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#4D4D4D]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Carbon Offset Solutions
                  </h4>
                </div>
                <p className="pt-2 ">
                  Understanding the importance of balancing emissions with
                  carbon removal, we provide customized carbon offset solutions.
                  Our team collaborates with clients to develop offset projects
                  that sequester or reduce an equivalent amount of carbon
                  dioxide emissions. By investing in verified and certified
                  carbon offset initiatives, businesses can effectively
                  neutralize their carbon footprints and contribute to climate
                  change mitigation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#49A078]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Sustainability Consulting
                  </h4>
                </div>
                <p className="pt-2 ">
                  Climate Detox offers sustainability consulting services to
                  support companies in adopting greener practices and
                  eco-friendly policies. Our experts work closely with clients
                  to develop robust sustainability strategies, setting emission
                  reduction targets, and implementing sustainable business
                  practices.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#4D4D4D]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Third-Party Services for Renewable Energy
                  </h4>
                </div>
                <p className="pt-2 ">
                  Climate Detox offers third-party services to facilitate the
                  integration of renewable energy technologies into diverse
                  industrial operations. Our team of seasoned energy experts
                  collaborates with clients to assess their specific energy
                  needs, identify viable renewable energy sources, and recommend
                  tailored solutions. Whether it's solar, wind, biomass, or
                  other clean energy options, we ensure a seamless transition to
                  sustainable energy practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col m-8 gap-6">
          {/* Second Row */}
          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#4D4D4D]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Project Management Consultancy
                  </h4>
                </div>
                <p className="pt-2 ">
                  Recognizing the complexities of implementing renewable energy
                  projects, Climate Detox provides comprehensive project
                  management consultancy services. From “concept to
                  commissioning”, our experienced project managers oversee every
                  aspect of the renewable energy initiatives, ensuring efficient
                  execution, timely delivery, and adherence to quality
                  standards.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#49A078]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Energy Audits and Feasibility Studies
                  </h4>
                </div>
                <p className="pt-2 ">
                  Climate Detox conducts detailed energy audits and feasibility
                  studies to evaluate the potential for integrating renewable
                  energy systems. By conducting thorough assessments, we
                  identify opportunities for energy optimization and recommend
                  the most suitable renewable energy solutions tailored to each
                  client's unique requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#4D4D4D]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    Regulatory Compliance and Permitting
                  </h4>
                </div>
                <p className="pt-2 ">
                  Navigating the regulatory landscape of renewable energy
                  projects can be challenging. Our team at Climate Detox assists
                  clients in obtaining necessary permits and ensures compliance
                  with relevant regulations, making the adoption of renewable
                  energy technologies a smooth and hassle-free process.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-col-2 h-auto row-span-1 w-full text-white bg-[#49A078]">
            <div className="py-9 px-8 sm:px-10  flex flex-col gap-14">
              <div>
                <div>
                  <h4 className="cursur-pointer font-bold text-white ">
                    IEC (Information, Education, and Communication) Activities
                  </h4>
                </div>
                <p className="pt-2 ">
                  We believe that creating awareness is crucial for fostering a
                  sustainable mindset. Climate Detox conducts IEC activities
                  through various channels, including workshops, seminars,
                  webinars, and awareness campaigns. These activities aim to
                  educate the public and businesses about climate change, its
                  impacts, and the urgent need for sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerbar />
    </>
  );
}
