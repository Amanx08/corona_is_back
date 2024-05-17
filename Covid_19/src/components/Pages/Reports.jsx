import React from 'react'
import Global_deaths from '../Global_deaths/Global_deaths'
import Reported_deaths from '../Reported_deaths/Reported_deaths'
import Mortality_charts from '../Mortality_charts/Mortality_charts'

function Reports() {
  return (
    <div>
      <Global_deaths/>
      <Mortality_charts />
      <Reported_deaths />
    </div>
  )
}

export default Reports
