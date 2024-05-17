import React from 'react'

function Footer() {
    return (
            <div className="Section-1-main bg-[#FBF3FF] px-5 lg:p-0">
                <div className="lg:flex justify-between maX-width py-10">
                    <div className="lg:w-96">
                        <h3 className="first-element text-[3.1rem] font-bold">
                            Covid.
                        </h3>
                        <p className="text-primary-para">Stay informed and stay safe with our comprehensive COVID-19 resources.
                            Together, we can overcome this
                            challenge. Learn more about our efforts to combat the pandemic and protect our community.</p>
                    </div>
                    <ul className="text-primary-para pt-3 flex flex-col gap-2">
                        <li className="text-primary-font font-semibold text-xl pb-2">Company</li>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./report.html">Reports</a></li>
                        <li><a href="./vaccine.html">Vaccines</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./symtoms.html">Symptoms</a></li>
                    </ul>
                    <ul className="text-primary-para pt-3 flex flex-col gap-2">
                        <li className="text-primary-font font-semibold text-xl pb-2">About</li>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Customer Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul className="text-primary-para pt-3 flex flex-col gap-2">
                        <li className="text-primary-font font-semibold text-xl pb-2">Customer Support</li>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul className="text-primary-para pt-3 flex flex-col gap-2">
                        <li className="text-primary-font font-semibold text-xl pb-2">Resources</li>
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
                <hr className="lg:w-[95%] mx-10" />
                <div className="text-[14px] text-primary-para flex justify-end maX-width pr-8 pt-5">Help Line : 00123-36985</div>
                <div className="text-primary-para text-[14px] text-center py-5">© 2020 Covid. All rights reserved.</div>
            </div>
    )
}

export default Footer
