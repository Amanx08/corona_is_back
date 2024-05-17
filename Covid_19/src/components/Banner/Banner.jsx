import React from 'react'

function Banner() {
    return (
        <>
            <div className="section-2-main lg:rounded-br-[18.75rem] bg-[#FBF3FF] px-5 lg:p-0">
                <div className="lg:flex items-center justify-center maX-width lg:h-[36.6rem] py-5">
                    <div className="section-2-first">
                        <div className="text-primary-font font-semibold">COVID-19 AWARENESS</div>
                        <h3 className="lg:text-6xl text-[2.5rem] text-primary-font font-semibold lg:pt-6">Stay Safe . Stay Home .</h3>
                        <div>
                            <img src="./assets/banner_img.png" className="w-[69rem] pt-5 lg:pt-0 block md:hidden" />
                        </div>
                        <p className="text-primary-para text-[1rem] lg:text-lg pt-6 pb-9 lg:w-3/4">Amet minim mollit non deserunt
                            ullamco est sit aliqua
                            dolor
                            do amet sint.
                            Velit officia consequat duis enim velit mollit Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint.</p>
                        <button className="p-4 px-7 bg-[#9D1ADA] text-[#FFFFFF] rounded">HOW TO PREVENT</button>
                    </div>
                    <div>
                        <img src="./assets/banner_img.png" className="w-[69rem] pt-5 lg:pt-0 hidden md:block" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
