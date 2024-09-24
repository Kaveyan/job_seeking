import React from 'react';
import Home2 from '../images/Home2.png';
import {FiSearch} from 'react-icons/fi';
import {GrLocation} from 'react-icons/gr';
import {Link} from 'react-router-dom';
function HomeMain() {
  return (
    <div className='homemain'>
      <div className='home-left'>
        <p className='home-big-letter'>
            Millions of Jobs<br/>  for you.<br/>  Verified by us.
        </p>
        <div className='home-box'>
            <div className='home-inner-box'>
                <div className='inner-box-home'><span><FiSearch/></span><h5>Job title or keyword</h5></div>
                <div className='inner-box-home'><span><GrLocation/></span><h5>City of post code</h5></div>
            </div>
            
            <button className='home-main-btn'><Link to='/signup' className='home-link'>Get Start</Link></button>
        </div>
        <h6><span>Popular Keyword:</span> Design, Development, UI, UX, Digital marketing</h6>
      </div>
    <img src={Home2} alt="" className='home-main-img'/>
    </div>
  )
}

export default HomeMain
