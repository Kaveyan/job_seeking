import RankList from '../components/RankList'
import React from 'react';
function DashMain() {
  return (
    <div className='dash-leader'>
      <h2 className='company-leader-txt'>LeaderBoard</h2>
      <div className='company-board'>
        <RankList/>
      </div>

    </div>
  )
}

export default DashMain