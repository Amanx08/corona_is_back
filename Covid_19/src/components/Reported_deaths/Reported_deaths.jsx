import React from 'react'

function Reported_deaths() {
  return (
    <>
      <div className="section-4-main py-16">
        <div className="maX-width px-5 lg:p-0">
            <div className="">
                <h3 className=" lg:text-[2.5rem] text-[1.5rem] font-semibold text-secondary-font ">The difference between reported deaths and
                    excess mortality in WHO Regions</h3>
                <h6 className="text-primary-para2 lg:text-lg ">When we chart reported COVID-19 deaths and estimated excess
                    mortality by World Bank income group, we're able to observe trends that help us understand how the
                    income level of countries may have affected COVID-19 impact and response.</h6>
                <div className="flex lg:flex-row flex-col  lg:gap-14 gap-5 pt-9">
                    <div>
                        <img src="./assets/region_africa_400x337 1.png"/>
                    </div>
                    <div>
                        <img src="./assets/region_americas_400x337 1.png"/>
                    </div>
                    <div>
                        <img src="./assets/region_eastern-med_400x337 1.png"/>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-14 gap-5 pt-9">
                    <div>
                        <img src="./assets/region_europe_400x337 1.png"/>
                    </div>
                    <div>
                        <img src="./assets/region_south-east-asia_400x337 1.png"/>
                    </div>
                    <div>
                        <img src="./assets/region_western-pacific_400x337 1.png"/>
                    </div>
                </div>
                
            </div>
        </div>
    </div> 
    </>
  )
}

export default Reported_deaths
