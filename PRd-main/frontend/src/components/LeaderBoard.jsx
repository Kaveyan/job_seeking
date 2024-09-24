import React from 'react'
import './Student_dashboard.css'
import RankList from './RankList'
import LeaderResume from './LeaderResume'
import Harizibam from '../images/Harizibam.jpg'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillChatRightTextFill} from 'react-icons/bs'

function LeaderBoard({profileData}) {
  return (
    <div className='leaderboard'>
      <div className='leaderboard-left'>
            <span className='leaderboard-header'><h2>Leaderboard</h2></span>
            <div className='rank'>
                    < RankList/>
            </div>
      </div>
      <div className='leaderboard-right'>
            <LeaderResume profileData={profileData}/>
      </div>
    </div>
  )
}

export default LeaderBoard
