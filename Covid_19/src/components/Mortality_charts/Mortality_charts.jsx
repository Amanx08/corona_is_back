import React from 'react'

function Mortality_charts() {
  return (
    <>
      <div className="section-4-main py-16 bg-[#FBF3FF]">
        <div className="maX-width px-5 lg:p-0">
          <div className="">
            <h3 className=" lg:text-[2.5rem] text-[1.5rem] font-semibold text-primary-font">How to read excess mortality charts</h3>
            <div className="lg:flex gap-14 pt-9">
              <div>
                <h6 className="text-primary-para text-xl font-medium py-3">Baseline</h6>
                <img src="./assets/explanation_baseline_400x300 1.png" />
                <h6 className="text-primary-para lg:text-lg pt-4">The chart has a baseline of zero, representing the
                  number of deaths that should be expected
                  based on existing average mortality data from 2015 to 2019.</h6>
              </div>
              <div>
                <h6 className="text-primary-para text-xl font-medium py-3">Reported COVID-19 deaths</h6>
                <img src="./assets/static2.png" />
                <h6 className="text-primary-para text-lg pt-4">The chart has a baseline of zero, representing the
                  number of deaths that should be expected
                  based on existing average mortality data from 2015 to 2019.</h6>
              </div>
              <div>
                <h6 className="text-primary-para text-xl font-medium py-3">Estimated excess mortality</h6>
                <img src="./assets/statics5.png" />
                <h6 className="text-primary-para text-lg pt-4">The chart has a baseline of zero, representing the
                  number of deaths that should be expected
                  based on existing average mortality data from 2015 to 2019.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mortality_charts


