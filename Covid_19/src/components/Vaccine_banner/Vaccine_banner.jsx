import React from 'react'
import {Link} from 'react-router-dom'


function Vaccine_banner() {
  return (
    <>
      <div className="section-2-m2in maX-width px-5 lg:px-0">
        <div className="">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-44 lg:py-20 py-5">
                <div className="first-part w-full lg:w-7/12">
                    <h3 className=" lg:text-[2.5rem] text-[1.7rem] font-semibold text-secondary-font">Vaccines for COVID-19</h3>
                    <p className="text-lg font-medium text-primary-para2">COVID-19 vaccines are safe, effective, and free. Get
                        answers to <Link to="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html" target="_blank"
                            className="text-[#2153D2] underline">frequently asked questions</Link>
                                and <Link to="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/facts.html"
                                    target="_blank" className="text-[#2153D2] underline">bust myths</Link> about vaccines.</p>
                    <p className="text-primary-para2 pt-5">People with COVID-19 have had a wide range of symptoms reported –
                        ranging
                        from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus.
                        Anyone can have mild to severe symptoms.</p>
                    <img src="./assets/vaccine-1.png" className="w-[24.5rem] md:hidden block py-5"/>

                    <div className="pt-5 flex flex-col lg:flex-row gap-5">
                        <button className="bg-[#9D1ADA] text-[#FFFFFF] p-4 rounded-md"><a href="./contact.html">Vaccine &
                                boosters</a></button>
                        <button className="bg-[#9D1ADA] text-[#FFFFFF] p-4 rounded-md"><a
                                href="./contact.html">Immunocompromised people</a></button>
                    </div>
                </div>
                <div className="second-part w-full md:w-4/12">
                    <img src="./assets/vaccine-1.png" className="w-[24.5rem] hidden md:block"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vaccine_banner
