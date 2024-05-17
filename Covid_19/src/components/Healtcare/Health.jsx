import React from 'react'

function Health() {
    return (
        <>
            <div className="section-6-all lg:py-20 py-10">
                <div className="maX-width px-5 lg:px-0">
                    <div className="flex items-center flex-col lg:flex-row">
                        <div className="first-div lg:w-1/2">
                            <img src="./assets/health_care.png" className="w-11/12 md:block hidden" />
                        </div>
                        <div className="second-div lg:w-1/2">
                            <h3 className=" lg:text-[2.5rem] text-[1.7rem] font-semibold text-secondary-font">Healthcare and Public Health</h3>
                            <img src="./assets/health_care.png" className="w-11/12 block md:hidden py-5" />

                            <p className="text-xl font-medium text-primary-para2 pt-2">Toolkits and resources for healthcare workers and
                                public health professionals.</p>
                            <p className="lg:text-xl text-primary-para2 pt-4">Put CDC syndicated pages on your website for free. Just add a
                                small piece of web code to your page and the content will automatically update whenever CDC
                                updates this page.</p>
                            <div className="pt-5 flex flex-col lg:flex-row  gap-5">
                                <button className="bg-[#9D1ADA] text-[#FFFFFF] p-4 rounded-md"><a href="./contact.html">Clinical &
                                    Professional Resources</a></button>
                                <button className="bg-[#9D1ADA] text-[#FFFFFF] p-4 rounded-md"><a href="./contact.html">Vaccine
                                    Administration </a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Health
