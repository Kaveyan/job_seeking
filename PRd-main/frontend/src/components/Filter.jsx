import React from 'react'
import {BiSearch} from 'react-icons/bi';
import './Student_dashboard.css';
import {CiLocationOn} from 'react-icons/ci';
import {MdShoppingBag} from 'react-icons/md'

function Filter() {
  return (
    <>
      <div className='filter'>
            <ul>
                <li>
                    <BiSearch className='flt-search'/>
                    <select id="domain">
                        <option value="Designer">Designer</option>
                        <option value="volvo">Volvo</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>   
                </li>
                <li>
                    <CiLocationOn className='flt-loc'/>
                    <select id="work_location">
                        <option value="saab">Work location</option>
                        <option value="volvo">Volvo</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>   
                </li>
                <li>
                    <MdShoppingBag className='flt-exp'/>
                    <select id="experience">
                        <option value="experience">Experience</option>
                        <option value="volvo">Volvo</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>   
                </li>
                <li>
                    <BiSearch className='flt-dur'/>
                    <select id="per_month">
                        <option value="permonth">Per Month</option>
                        <option value="volvo">Volvo</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>   
                </li>
                <li className='list-range'>
                    <div className='flt-range'>
                                <h2>Salary range</h2>
                                <h2>$1200-$20000</h2>
                    </div>
                    <input type="range" name="" id="" />
                </li>
            
               
            </ul>
      </div>
    </>
  )
}

export default Filter
