import React from 'react'
import './Student_dashboard.css'
import Harizibam from '../images/Harizibam.jpg'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillChatRightTextFill} from 'react-icons/bs'
function LeaderResume({profileData}) {
  console.log("LeaderResume: ",profileData);
  return (
    <div className='leader-resume'>
                <div className='leader-profile-div'>
                 <img src={Harizibam} alt='#' className='leader-profile'/>
                </div>
                
                <div className='leader-resume-details'>
                      <div className='control'>
                        <label htmlFor="">Name  :</label>
                        <span>{profileData.name}</span>
                      </div>
                      <div className='control'>
                        <label htmlFor="">Email  :</label>
                        <span>{profileData.email}</span>
                      </div>
                      <div className='control'>
                        <label htmlFor="">Contact:</label>
                        <span>{profileData.contact}</span>
                      </div>
                </div>
                <div className='leader-resume-skill'>
                <div className='control-skill'>
                        <label htmlFor="">Skill:</label>
                        <span>{profileData.skill}</span>
                      </div>
                      <div className='control-skill'>
                        <label htmlFor="">Activity:</label>
                        <span>{profileData.activity}</span>
                      </div>
                      <div className='control-skill'>
                        <label htmlFor="">Achievement:</label>
                        <span>{profileData.acheivement}</span>
                      </div>
                      <div className='control-skill'>
                        <label htmlFor="">Area of Interest:</label>
                        <span>{profileData.areaofinterest}</span>
                      </div>
                      <div className='control-skill'>
                        <label htmlFor="">Project:</label>
                        <span>{profileData.project}</span>
                      </div>
                </div>
                <div className='leader-connection'>
                  <a href={profileData.githublink}>
                  <button className='leader-icon1'>
                     <FaGithub/> Github
                    </button>
                  </a>
                  <a href={profileData.linkedinlink}>
                  <button className='leader-icon2'>
                     <BsLinkedin/> LinkedIn
                    </button>
                  </a>
                  <a href={profileData.discordlink}>
                  <button className='leader-icon3'>
                     <BsFillChatRightTextFill/> Discord
                    </button>
                  </a>
                </div>
            </div>
  )
}

export default LeaderResume
