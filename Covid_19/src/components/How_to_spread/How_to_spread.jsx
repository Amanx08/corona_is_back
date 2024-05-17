import React from 'react'

function How_to_spread() {
  return (
    <>
       <div className="section-4-second lg:py-20 py-10">
        <div className="maX-width lg:flex gap-14 px-5 lg:p-0">
            <div>
                <h3 className="lg:text-[2.5rem] font-semibold text-secondary-font text-[2rem]">How does COVID-19 spread</h3>
                <p className="text-primary-para2 lg:text-lg tracking-wide">Coronaviruses are a family of viruses that can cause
                    respiratory illness in humans. They are called “corona” new coronavirus was identified as the cause
                    of outbreak that originated in China.</p>
                <div>
                    <div className="flex gap-3 items-center pt-6">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para2 lg:text-lg">Young, healthy people are not invulnerable</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para2 lg:text-lg">The virus can be airborne </div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para2 lg:text-lg">People can be infected more than once</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para2 lg:text-lg">Children can spread the virus</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para2 lg:text-lg">Super-spreaders are a major threat</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para2 lg:text-lg">Heat and humidity don’t protect against the virus</div>
                    </div>
                </div>
                <img src="./assets/covid 2.png" className="lg:w-[43rem] pt-5 lg:pt-0  block md:hidden"/>
                <div>
                    <button className="text-[#ffffff] bg-[#9D1ADA] p-3 rounded-md mt-9">HOW TO LEARN</button>
                </div>
            </div>
            <img src="./assets/covid 2.png" className="lg:w-[43rem] pt-5 lg:pt-0 hidden md:block"/>
        </div>
    </div>
    </>
  )
}

export default How_to_spread
