import React from 'react'

function Statistics() {
    return (
        <>
            <div className="section-3-main maX-width flex flex-col justify-center lg:py-20 py-5">
                <div className="px-5 lg:p-0">
                    <div className="lg:text-center">
                        <h3 className=" lg:text-[2.5rem] text-[2rem] font-semibold text-secondary-font">Coronavirus Statistics</h3>
                        <div className="lg:text-xl text-primary-para2 pt-5">Coronavirus disease (COVID-19) is an infectious disease
                            caused
                            by
                            the
                            SARS-CoV-2 virus.</div>
                    </div>
                    <div className="">
                        <div className="section-3-cards flex justify-around gap-10 flex-wrap lg:pt-14 pt-5">
                            <div className="card-1 flex md:flex-col flex-col justify-center items-center">
                                <img className="h-[3.7rem] w-[4.1rem]" src="./assets/Vector (1).png" />
                                    <div className="lg:text-[2.8rem] text-[2.3rem] text-secondary-font font-medium">40,45,400</div>
                                    <div className="text-primary-para2 font-medium">ACTIVE CASE</div>
                            </div>

                            <div className="card-1 flex flex-col justify-center items-center">
                                <img className="h-[3.7rem]" src="./assets/death-rate.png" />
                                    <div className="lg:text-[2.8rem] text-[2.3rem] text-secondary-font font-medium">35,45,350</div>
                                    <div className="text-primary-para2 font-medium">DEATH CASE</div>
                            </div>

                            <div className="card-1 flex flex-col justify-center items-center">
                                <img className="h-[3.7rem]" src="./assets/hospital-recover.png" />
                                    <div className="lg:text-[2.8rem] text-[2.3rem] text-secondary-font font-medium">12,74,370</div>
                                    <div className="text-primary-para2 font-medium">RECOVERY CASE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics
