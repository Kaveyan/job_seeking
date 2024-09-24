import React from 'react';
import {BiSearch}  from 'react-icons/bi';
import {GiClick} from 'react-icons/gi';
import {BsNewspaper} from 'react-icons/bs';

function HowWorks() {
  return (
    <>
        <h2>How it's works</h2>
        <ul className='how-works-ul'>
            <li className='how-works-box'>
                <GiClick className='how-edit'/>
 
                <h2>Easy to sign up</h2>        
                <span>You can easily create your account<br/>by email, social and Linkedin.</span>
            </li>
            <li className='how-works-box'>
                <BiSearch className='how-search'/>
                <h2>Search job</h2>        
                <span>100+ Categoris jobs in here. You<br/>can Easy find out your most<br/>faverite job.</span>
            </li>
            <li className='how-works-box'>
                <BsNewspaper className='how-apply'/>
                <h2>Apply Job</h2>        
                <span>When your profile is 100%<br/>complete then you can easily apply<br/>for your job with your skill tag.</span>
            </li>
        </ul>

    </>
  )
}

export default HowWorks;