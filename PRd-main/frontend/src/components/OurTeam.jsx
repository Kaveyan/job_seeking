import React from 'react'
import Harizibam from '../images/Harizibam.jpg'
import HariKrishnan from '../images/HariKrishnan.jpg'
import Davish from '../images/Davish.jpg'
import Kaveyan from '../images/kaveyan.jpg'
import Dhikshitha from '../images/dhik.jpg'
import './Student_dashboard.css';

function OurTeam() {
  return (
    <div className='our-team'>
        <h2>Our Team</h2>
        <ul className='our-team-ul'>
            <li className='our-team-box'>
                <div className='team-dp'>
                    <img src={Davish} alt="" />
                </div>    
                <div className='team-details'>
                    <h5>Davish</h5>
                    <span>BIT-CSE</span>
                </div>
            </li>
            <li className='our-team-box'>
                <div className='team-dp'>
                    <img src={HariKrishnan} alt="" />
                </div>
                <div className='team-details'>
                    <h5>Hari Krishnan</h5>
                    <span>BIT-CSE</span>
                </div>
            </li>
            <li className='our-team-box'>
                <div className='team-dp'>
                    <img src={Harizibam} alt="" />
                </div>   
                <div className='team-details'>
                    <h5>Harizibam</h5>
                    <span>BIT-AIML</span>
                </div>
            </li>
            <li className='our-team-box'>
                <div className='team-dp'>
                    <img src={Kaveyan} alt="" />
                </div>     
                <div className='team-details'>
                    <h5>Kaveyan</h5>
                    <span>BIT-CSE</span>
                </div>
            </li>
            <li className='our-team-box'>
                <div className='team-dp'>
                    <img src={Dhikshitha} alt="" />
                </div>  
                <div className='team-details'>
                    <h5>Dhikshitha</h5>
                    <span>BIT-CSE</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default OurTeam
