import React from 'react'

function Help() {
  return (
    <>
      <div className="section-2-main maX-width px-5 lg:p-0">
    <div className="lg:py-10">
        <h3 className=" text-[1.8rem] lg:text-[2.5rem] font-semibold text-secondary-font underline underline-offset-auto pt-10">Get Help</h3>
        <div className="flex lg:flex-row flex-col justify-between">
            <div className="pt-5">
                <h6 className="text-xl text-primary-para2 font-semibold">COVID‑19 Vaccine Hotline</h6>
                <h6 className="text-lg text-primary-para2 pt-1">Help is available in English, Spanish, and many other languages.</h6>
                <div className="flex text-secondary-font text-[1.37rem] font-semibold pt-5">
                    <img src="./assets/phone.svg"/>
                    <h6 className="underline ps-3"> 15222-85693</h6>
                </div>
                <div className="flex text-secondary-font text-[1.37rem] font-semibold pt-2">
                    <img src="./assets/tty.svg"/>
                    <h6 className="underline ps-3"> TTY 15222-85693</h6>
                </div>
            </div>
            <div className="pt-5">
                <h6 className="text-xl text-primary-para2 font-semibold">Disability Information and Access Line (DIAL)</h6>
                <h6 className="text-lg text-primary-para2 pt-1">COVID‑19 vaccination support for people with disabilities.</h6>
                <div className="flex text-secondary-font text-[1.37rem] font-semibold pt-5">
                    <img src="./assets/phone.svg"/>
                    <h6 className="underline ps-3">36589-54128</h6>
                </div>
                <div className="flex text-secondary-font text-[1.37rem] font-semibold pt-5">
                    <img src="./assets/mail.svg"/>
                    <h6 className="underline ps-3">DIAL.@n4a.org</h6>
                </div>
            </div>
        </div>
    </div>




</div>
    </>
  )
}

export default Help
