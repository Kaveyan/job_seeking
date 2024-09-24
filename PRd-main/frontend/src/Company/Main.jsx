import React, { useState } from 'react'
import './Company.css'
import DashMain from './DashMain';
import DashTop from "./DashTop";
import DashNav from './DashNav';
import CompanyReview from './CompanyReview';
import Message from '../components/Message';
import Postjob from './Postjob';
import CompanyPostHistory from './CompanyPostHistory';

export default function Main({companyauthToken,companyUser,profileData,setProfileData}) {
  const [dashContain,setDashContain] = useState('jo1');
  return (
    <div className="Company-App">
    <div className='dash-nav'>
            <DashNav dashContain={dashContain} setDashContain={setDashContain} />
    </div>
    <div className='dash-main'>
      
          <DashTop/>
          {
              companyauthToken? (
                <>{
                  dashContain == 'canditates'?<CompanyReview companyUser={companyUser} profileData={profileData} setProfileData={setProfileData}/>: dashContain==='job'?<CompanyPostHistory dashContain={dashContain} setDashContain={setDashContain} companyUser={companyUser}  />:dashContain==='createpost'?<Postjob dashContain={dashContain} setDashContain={setDashContain} companyUser={companyUser} />:<DashMain/>
                }
                </>):(
                  <div className='login-error'>Please log in to view the content.</div>
                )
          }
{/*           
            */}
          
          
    </div>
  </div>
    
  )
}
