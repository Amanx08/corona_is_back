import React from 'react'

function Vaccine() {
  return (
    <>
      <div className="section-5-all  bg-[#FBF3FF] lg:py-20 py-10">
        <div className="maX-width px-5 lg:px-0">
            <div className="flex  justify-between flex-col lg:flex-row gap-24 ">
                <div className="first-section lg:w-1/2">
                    <h3 className=" lg:text-[2.5rem] text-[1.7rem] font-semibold text-primary-font">COVID- 19 Vaccine Data</h3>
                    <p className="text-xl font-medium text-primary-para">Updated December 28,2022</p>
                    <div className="first-card bg-[#ffff] p-7 rounded-2xl shadow-lg mt-5">
                        <h3 className=" text-[1.53rem] font-semibold text-secondary-font">MORE VACCINE DATA</h3>
                        <p className="text-lg font-medium text-primary-para2 pt-2">Learn more about vaccination coverage and
                            effectiveness data.
                        </p>
                        <p className="lg:text-lg text-primary-para2 pt-3">Tracking COVID-19 vaccine distribution and administration
                            activities requires collaboration between public and private information technology (IT)
                            systems and integration of existing and newly developed IT systems.</p>
                        <div className="pt-4 flex flex-col lg:flex-row gap-5">
                            <button className="bg-[#9D1ADA] text-[#FFFFFF] p-4 rounded-md"><a
                                    href="./contact.html">Vaccinations in the U.S</a></button>
                            <button className="bg-[#9D1ADA] text-[#FFFFFF] p-4 rounded-md"><a href="./contact.html">Vaccine
                                    Effectiveness </a></button>
                        </div>
                    </div>
                    <div className="first-card bg-[#ffff] p-7 rounded-2xl shadow-lg mt-5">
                        <ul className="list-disc text-primary-para2 lg:text-lg pl-5 flex flex-col gap-1 font-medium mt-2">
                            <li>People with at Least 1 Dose (Age 5+ Years) 85.3% </li>
                            <li>Fully Vaccinated People (Age 5+ Years) 73.1%</li>
                            <li>People with an Updated Booster (Age 5+years) 15.1%</li>
                            <li>Fully Vaccinated People (Age 5+ Years) 73.1%</li>
                            <li>People with an Updated Booster (Age 5+years) 15.1%</li>
                        </ul>
                    </div>
                </div>
                <div className="second-section lg:w-1/2 flex items-end">
                    <img src="./assets/vaccine-img.png" className="rounded-[50%] lg:w-11/12"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vaccine
