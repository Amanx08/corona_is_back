import React from 'react'

function Symptoms_include() {
  return (
    <>
      <div className="section-3-main bg-[#FBF3FF]">
        <div className="maX-width md:flex  items-center justify-between">

          <div>
            <img src="./assets/symptoms.png" className="w-[400px]" />
          </div>
          <div className=" flex flex-col lg:items-end px-5 lg:p-0">
            <h3 className=" lg:text-[2.5rem] text-[1.9rem] font-semibold text-primary-font">Possible symptoms include:</h3>
            <div className=" text-primary-para text-lg font-medium pt-5 flex flex-col lg:flex-row gap-5 pb-10 lg:gap-28 px-5 lg:p-0">
              <ul className="list-disc text-primary-para text-lg leading-9">
                <li>Fever or chills</li>
                <li>Cough</li>
                <li>Vomiting</li>
                <li>Fatigue</li>
                <li>Muscle or Body Ashes</li>
              </ul>
              <ul className="list-disc text-primary-para text-lg leading-9">
                <li>Headache</li>
                <li>New Loss of taste or smell</li>
                <li>Sore Throat</li>
                <li>Congestion or runny nose</li>
                <li>Diarrhea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Symptoms_include
