import React from 'react'

function Covid_symtoms() {
  return (
    <>
      <div className="secton-2-main maX-width px-5 lg:p-0">
        <div className=" flex lg:flex-row flex-col lg:py-20 py-10">
            <div className="first-div lg:w-6/12">
                <h3 className=" lg:text-[2.5rem] text-[1.7rem] font-semibold text-secondary-font">Symptoms of COVID-19</h3>
                <div className=" text-primary-para2 text-lg pt-5">
                    <ul className="list-disc text-primary-para2 lg:text-lg pl-5">
                        <li> Symptoms may change with new COVID-19 variants and can vary depending on vaccination
                            status. CDC will continue to update this list as we learn more about COVID-19.</li>
                        <li>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms
                            to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Anyone can
                            have mild to severe symptoms.</li>
                        <li>Symptoms may change with new COVID-19 variants and can vary depending on vaccination status.
                            CDC will continue to update this list as we learn more about COVID-19.
                        </li>
                        <li>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms
                            to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Anyone can
                            have mild to severe symptoms.</li>
                    </ul>
                </div>
            </div>
            <div className="second-div lg:w-6/12">
                <img src="./assets/3d-virus-cell 1.png"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Covid_symtoms
