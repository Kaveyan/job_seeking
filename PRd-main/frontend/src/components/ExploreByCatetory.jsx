import React from 'react'
import {FaPencilRuler} from 'react-icons/fa';
import {PiFileCodeFill} from 'react-icons/pi';
import {GiTakeMyMoney} from 'react-icons/gi';
import {SiWindows11} from 'react-icons/si';

function ExploreByCatetory() {
  return (
    <div className='explore-by-category'>
        <h1>Explore by category</h1>
        <ul>
            <li className='explore-box'>
                <FaPencilRuler className='explore-logo'/>
                <p> UI X Design</p>
                <span>View job</span>
            </li>
            <li className='explore-box'>
                <PiFileCodeFill className='explore-logo' />
                <p>Development</p>
                <span>View job</span>
            </li>
            <li className='explore-box'>
                <GiTakeMyMoney className='explore-logo' />
                <p>Finance</p>
                <span>View job</span>
            </li>
            <li className='explore-box'>
                <SiWindows11 className='explore-logo' />
                <p>All</p>
                <span>View job</span>
            </li>
        </ul>
    </div>
  )
}

export default ExploreByCatetory