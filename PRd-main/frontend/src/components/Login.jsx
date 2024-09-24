import React, { useState } from 'react';

import './Student_dashboard.css';
import MessageSideNav from './MessageSideNav';
import MessageContact from './MessageContact';
import MessageChating from './MessageChating';
import Courses from './Courses';
import CoursesDetails from './CoursesDetails';
import Status from './Status';

function Message({stn,setStn}) {
 
  return (
    <div className='message'>
      <div className='message-sidenavbar'> 
        <MessageSideNav setStn={setStn}/>
      </div>
      {stn=='message'?(<div className='message-chat'>
        <div className='message-chat-contacts'>
                <MessageContact/>
        </div>
        <div className='message-chat-chats'>
                <MessageChating/>
        </div>
      </div>):stn=='status'?<Status/>:stn=='courses'?<Courses setStn={setStn}/>:<CoursesDetails />
      }
    </div>
  )
}

export default Message
