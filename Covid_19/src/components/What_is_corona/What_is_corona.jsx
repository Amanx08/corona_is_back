import React from 'react'

function What_is_corona() {
  return (
    <>
      <div className="section-4-first bg-[#FBF3FF] py-5 lg:py-20">
        <div className="maX-width lg:flex gap-14 px-5 lg:p-0">
            <img src="./assets/covid 1.png" className="hidden md:block w-[43rem]"/>
            <div>
                <h3 className="lg:text-[2.5rem] font-semibold text-primary-font text-[2rem] ">What is Coronavirus?</h3>
                <img src="./assets/covid 1.png" className="block md:hidden w-[43rem] mt-5"/>
                <p className="text-primary-para lg:text-lg tracking-wide">Coronaviruses are a family of viruses that can cause
                    respiratory illness in humans. They are called “corona” new coronavirus was identified as the cause
                    of outbreak that originated in China.</p>
                <div>
                    <div className="flex gap-3 items-center pt-6">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para lg:text-lg">Young, healthy people are not invulnerable</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para lg:text-lg">The virus can be airborne </div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para lg:text-lg">People can be infected more than once</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para lg:text-lg">Children can spread the virus</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para lg:text-lg">Super-spreaders are a major threat</div>
                    </div>
                    <div className="flex gap-3 items-center pt-4">
                        <div>
                            <img src="./assets/Tick-Square.svg"/>
                        </div>
                        <div className="text-primary-para lg:text-lg">Heat and humidity don’t protect against the virus</div>
                    </div>
                </div>
                <div>
                    <button className="text-[#ffffff] bg-[#9D1ADA] p-3 rounded-md mt-9">KNOW MORE</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default What_is_corona
