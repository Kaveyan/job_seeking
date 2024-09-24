import React from 'react'
import MsgMem from './MsgMem'
import './Student_dashboard.css'
import MsgChat from './MsgChat'
function AllChat() {
  return (
    <div className='allchat'>
          <MsgMem/>
          <MsgChat/>
    </div>
  )
}

export default AllChat
