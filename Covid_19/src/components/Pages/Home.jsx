import React from 'react'
import Banner from '../Banner/Banner'
import Statistics from '../Statistics/Statistics'
import What_is_corona from '../What_is_corona/What_is_corona'
import How_to_spread from '../How_to_spread/How_to_spread'
import Protect from '../Protect/Protect'
import How_to_Prevent from '../How_to_Prevent/How_to_Prevent'

function Home() {
  return (
    <div>
      <Banner/>
      <Statistics />
      <What_is_corona />
      <How_to_spread />
      <How_to_Prevent />
      <Protect />
    </div>
  )
}

export default Home
