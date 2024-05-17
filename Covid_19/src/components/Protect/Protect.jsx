import React from 'react'

function Protect() {
  return (
    <>
      <div className="section-4-first lg:py-20 py-10">
        <div className="maX-width lg:flex gap-14 px-5 lg:p-0">
            <div>
                <h3 className="lg:text-[2.5rem] text-[2rem] font-semibold text-secondary-font">How to Protect Yourself</h3>
                <p className="text-primary-para2 lg:text-lg tracking-wide pt-5">Coronaviruses are a family of viruses that can
                    cause
                    respiratory illness in humans. They are called “corona” new coronavirus was identified as the cause
                    of outbreak that originated in China.</p>
                <div className="lg:flex pt-10 gap-20">
                    <div>
                        <div className="text-xl font-semibold">You Should Do</div>
                        <div className="flex gap-3 items-center pt-5">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Stay At Home</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Wear Mask </div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Use Sanitizer</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Disinfect Your Home</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Frequent self- isolation</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Wash your Hands</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/green-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Frequent self- isolation </div>
                        </div>
                    </div>

                    <div className="pt-5 lg:pt-0">
                        <div className="text-xl font-semibold">You Should Avoid</div>
                        <div className="flex gap-3 items-center pt-5">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid infected people</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid Handshaking</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid Animals</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid Travelling</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid touching your face</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid infected surfaces</div>
                        </div>
                        <div className="flex gap-3 items-center pt-3">
                            <div>
                                <img src="./assets/red-tick.svg"/>
                            </div>
                            <div className="text-primary-para2 lg:text-lg">Avoid Animals</div>
                        </div>
                    </div>
                </div>

            </div>
            <img src="./assets/self-protection.png" className="lg:w-[43rem] pt-5 lg:pt-0"/>
        </div>
    </div>
    </>
  )
}

export default Protect
