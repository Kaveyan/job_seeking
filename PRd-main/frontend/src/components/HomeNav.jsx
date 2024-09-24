import React from 'react'
import { Link } from 'react-router-dom'
import Teamlogo from '../assets/Teamlogo.png'
function HomeNav() {
  return (
    <div className='homenav'>
      <div className='teamintro'>
        <img src={Teamlogo} alt="" className='teamlogo' />
        <div className='home-logo'>NeuroWizard</div>
      </div>
      
      <ul className='home-nav-ul'>
      
        <li><Link to='/login' className='link'>Browse Job</Link></li>
        <li><Link to='/companysign' className='link'>Companies</Link></li>
        <li><Link to='/freelancingsign' className='link'>Become a Seller</Link></li>
      </ul>
      <Link to='/login'><button className='home-nav-btn'>Apply a job</button></Link>
      
    </div>
  )
}

export default HomeNav
// 0057FF