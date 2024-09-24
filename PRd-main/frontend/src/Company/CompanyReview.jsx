
import React, { useState } from 'react'
import LeaderResume from '../components/LeaderResume'
import CompanyApply from './CompanyApply'
function CompanyReview({companyUser,profileData,setProfileData}) {
  const [resumeProfile, setResumeProfile] = useState({});
  return (
    <div className='companyreview'>
      <div className='companyreview-left'>
               <CompanyApply companyUser={companyUser} setResumeProfile={setResumeProfile}/>
      </div>
      <div className='companyreview-right'>
       <LeaderResume profileData={resumeProfile}/>
      </div>
    </div>
  )
}

export default CompanyReview
