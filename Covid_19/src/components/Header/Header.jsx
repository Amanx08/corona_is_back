import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className="Section-1-main bg-color-primary py-2">
      <div className="flex items-center justify-between maX-width px-5 lg:p-0">
        <div className="first-element text-primary-font text-[2.8rem] lg:text-[3.1rem] font-bold">
          Covid.
        </div>
        <div className="middle-element">
          <ul className=" gap-8  hidden md:flex text-primary-para text-xl">
            <li>
              <NavLink to="/" className={({ isActive }) =>`${isActive ? "text-primary-font" : "text-primary-para"}`}> Home</NavLink>
            </li>
            <li>
              <NavLink to="/reports" className={({ isActive }) => ` ${isActive ? "text-primary-font" : "text-primary-para"}`}>Reports</NavLink>
            </li>
            <li>
              <NavLink to="/vaccines" className={({ isActive }) => ` ${isActive ? "text-primary-font" : "text-primary-para"}`}>Vaccines</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => ` ${isActive ? "text-primary-font" : "text-primary-para"}`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/symptoms" className={({ isActive }) => ` ${isActive ? "text-primary-font" : "text-primary-para"}`}> Symptoms</NavLink>
            </li>
          </ul>
        </div>
        <div className="last-element">
          <button className="bg-[#9D1ADA] text-[#FFFFFF] p-3 rounded-md">
            <NavLink to="/contact" className={({ isActive }) => ' ${isActive ? "text-orange-700" : "text-grey-700"}'}> CONTACT US </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
