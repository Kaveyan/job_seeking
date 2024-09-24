import React from 'react'
import {BiBell} from 'react-icons/bi'
import {BsSendFill} from 'react-icons/bs'
import {MdAttachFile} from 'react-icons/md'
import {FiMic} from 'react-icons/fi'
function MessageChating() {
  return (
    <>
      <div className='message-chatting-top'>
        <h2>Harizibam</h2> 
        <BiBell className='message-chatting-notification'/>
      </div>
      <div className='message-chatting-main'>

      </div>
      <div className='message-chatting-bottom'>
       
        <MdAttachFile/>
        <FiMic/>
        <input type="text" placeholder='Type...' className='message-chatting-input'/>
        <BsSendFill/>
      </div>
    </>
  )
}

export default MessageChating
