import React from 'react'

function DashNav({dashContain,setDashContain}) {
    const handleChange=(props)=>{
      setDashContain(props);
    }
  return (
    <>
        <ul className='dash-ul'>
          <li onClick={()=>{handleChange('dashboard')}} class="link">Dashboard</li>
          <li onClick={()=>{handleChange('canditates')}} class="link">Canditates</li>
          <li onClick={()=>{handleChange('job')}} class="link">Job</li>
          <li onClick={()=>{handleChange('message')}}>Chat</li>
        </ul>
    </>
  )
}

export default DashNav