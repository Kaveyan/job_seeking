import React from 'react'
import Banner from '../images/Flt-hire.jpg';
import './Student_dashboard.css';
import skill from '../images/skill.png'
import project from '../images/project.png'
export default function FindSide({stn,setStn}) {
  return (
    <div  className='find-side'>
        <img src={Banner} alt="" className='find-banner' onClick={()=>{setStn('')}} />
        <img src={skill} alt=""  className='find-banner' />
        <img src={project} alt=""  className='find-banner' />
    </div>
  )
}
