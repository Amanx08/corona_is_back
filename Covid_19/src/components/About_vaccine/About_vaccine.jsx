import React from 'react'

function About_vaccine() {
  return (
    <>
         <div className="section-4-all lg:py-20 py-10 px-10 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between maX-width">
            <div className="first-card pt-3">
                <h3 className=" text-[1.53rem] font-semibold text-secondary-font">About Vaccines</h3>
                <ul className="list-disc text-primary-para2 text-lg pl-5 flex flex-col gap-1 font-medium mt-2">
                    <li>Overview of COVID - 19 vaccines </li>
                    <li>Vaccine safety</li>
                    <li>Frequently asked questions</li>
                </ul>
            </div>
            <div className="first-card pt-3">
                <h3 className=" text-[1.53rem] font-semibold text-secondary-font">Your Vaccination</h3>
                <ul className="list-disc text-primary-para2 text-lg pl-5 flex flex-col gap-1 font-medium mt-2">
                    <li>How to find a vaccine or booster</li>
                    <li>Get a COVID-19</li>
                    <li>Stay u to Date</li>
                </ul>
            </div>
            <div className="first-card pt-3">
                <h3 className=" text-[1.53rem] font-semibold text-secondary-font">After Vaccination</h3>
                <ul className="list-disc text-primary-para2 text-lg pl-5 flex flex-col gap-1 font-medium mt-2">
                    <li>Get your Vaccination card </li>
                    <li>Possible side effects</li>
                    <li>Register for V- safe</li>
                </ul>
            </div>

        </div>
    </div>
    </>
  )
}

export default About_vaccine
