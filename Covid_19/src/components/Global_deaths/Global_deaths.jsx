import React from 'react'

function Global_deaths() {
  return (
    <>
      <div className="section-3-main maX-width lg:py-10">
        <div className="px-5 lg:p-0">
            <h3 className=" lg:text-[2.5rem] text-[1.5rem] font-semibold text-secondary-font">Global excess deaths associated with COVID-19,
                January 2020 - December 2021</h3>
            <div className="lg:flex items-center justify-between gap-8">
                <div className=" text-primary-para2 text-lg lg:w-11/12">
                    <div>A comprehensive view of global deaths directly and indirectly associated with the COVID-19
                        pandemic.</div>
                    <ul className="list-disc text-primary-para2 lg:text-lg pl-5 pt-3 lg:pt-0">
                        <li> Excess mortality includes deaths attributable directly to COVID-19 that were counted and
                            reported to WHO by countries.</li>
                        <li>It also includes deaths attributable directly to COVID-19 that were not counted or reported
                            by countries.</li>
                        <li>It also includes deaths indirectly associated with COVID-19, due to other causes and
                            diseases, resulting from the wider impact of the pandemic on health systems and society.
                        </li>
                        <li>It is minus any deaths that would have occurred under normal circumstances but were averted
                            due to pandemic-related changes in social conditions and personal behaviors e.g. less
                            traffic deaths or influenza deaths due to local lockdowns and less travel.</li>
                    </ul>
                </div>
                <div className="pt-5 lg:pt-0">
                    <img src="./assets/global (2).png"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Global_deaths
