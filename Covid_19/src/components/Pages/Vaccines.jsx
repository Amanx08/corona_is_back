import React from 'react'
import Vaccine_banner from '../Vaccine_banner/Vaccine_banner'
import Getting_your_vaccine from '../Getting_your_vaccine/Getting_your_vaccine'
import About_vaccine from '../About_vaccine/About_vaccine'
import Vaccine_data from '../Vaccine_data/Vaccine_data'
import Health from '../Healtcare/Health'

function Vaccines() {
  return (
    <>
     <Vaccine_banner /> 
     <Getting_your_vaccine />
     <About_vaccine />
     <Vaccine_data />
     <Health />
    </>
  )
}

export default Vaccines
