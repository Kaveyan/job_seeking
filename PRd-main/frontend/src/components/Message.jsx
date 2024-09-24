import React, { useState } from 'react';

import './Student_dashboard.css';
import MessageSideNav from './MessageSideNav';
import MessageContact from './MessageContact';
import MessageChating from './MessageChating';
import Courses from './Courses';
import CoursesDetails from './CoursesDetails';

function Message() {
  const [stn,setStn] =useState('mesage');
  return (
    <div className='message'>
      <div className='message-sidenavbar'> 
        <MessageSideNav/>
      </div>
      {stn=='message'?(<div className='message-chat'>
        <div className='message-chat-contacts'>
                <MessageContact/>
        </div>
        <div className='message-chat-chats'>
                <MessageChating/>
        </div>
      </div>):<Courses/>
      }
    </div>
  )
}

export default Message
