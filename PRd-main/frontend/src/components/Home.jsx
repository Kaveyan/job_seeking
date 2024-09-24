import React from 'react'
import './Student_dashboard.css'
import HomeNav from './HomeNav'
import HomeMain from './HomeMain'
import ExploreCompany from './ExploreCompany'
import OurTeam from './OurTeam'
import Footer from './Footer'
export default function Home() {
  return (
    <div className='home'>
      <div className='home-nav-div'>
        <HomeNav/>
      </div>
        <HomeMain/>
        <ExploreCompany/>
        <OurTeam/>
        <Footer/>
    </div>
  )
}
