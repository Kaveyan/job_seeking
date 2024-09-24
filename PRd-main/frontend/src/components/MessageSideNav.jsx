import React from 'react'
import {BsChatText} from 'react-icons/bs';
import {LiaHomeSolid} from 'react-icons/lia';
import {BsChatSquareText} from 'react-icons/bs';
import {SiGooglemeet} from 'react-icons/si';
import {MdContacts} from 'react-icons/md'


function MessageSideNav({setStn}) {
  return (
    <>
        <BsChatText/>
        <div className='message-sidenavbar-icons'>
            <LiaHomeSolid className='message-icons' onClick={()=>{setStn('message')}} />
            <BsChatSquareText className='message-icons' onClick={()=>{setStn('message')}} />
            <SiGooglemeet className='message-icons' onClick={()=>{ setStn('courses') }} />
            <MdContacts className='message-icons' onClick={()=>{setStn('status')}} />
        </div>  
    </>
  )
}

export default MessageSideNav
    