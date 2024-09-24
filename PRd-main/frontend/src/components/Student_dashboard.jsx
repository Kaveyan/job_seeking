import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import FindJob from './FindJob';
import LeaderBoard from './LeaderBoard';
import Message from './Message';
import JobDetail from './JobDetail';
import StudentProfile from './StudentProfile';
import authService from '../features/auth/authService';

export default function Student_dashboard({authToken,userDBData,profileData,setProfileData}) {
  console.log("From Student Dashboard: ",userDBData)
  const [studentMain, setStudentMain] = useState('findjob');
  const [userData, setUserData] = useState(null);
  const [stn,setStn] =useState('courses');
 
  const [demotry,setDemoTry] = useState('');
  useEffect(() => {
    if (authToken !== undefined && authToken) {
      authService.StudentDashboard(authToken)
        .then(data => {
          setUserData(data);
          console.log("From Student Dashboard API: ",userData)
        })
        .catch(error => {
          console.log(error);
        });
    }
    if(authService !==undefined && authToken){
      authService.UserProfileDetails(userDBData._id)
          .then(data=>{
            setProfileData(data);
            console.log("From Navbar Profile Data",profileData)
        })
    }
    
  }, [authToken]);

  return (
    <div className='s_dashboard'>
      <div className='nav'>
        <Navbar studentMain={studentMain} setStudentMain={setStudentMain} setProfileData={setProfileData} profileData={profileData}/>
      </div>
      <div className='s_main'>
        {authToken ? (
          <>
            {studentMain === 'findjob' ? (
              <FindJob studentMain={studentMain} setStudentMain={setStudentMain} setDemoTry={setDemoTry} stn={stn} setStn={setStn}  />
            ) : studentMain === 'message' ? (
              <Message stn={stn} setStn={setStn}  />
            ) : studentMain === 'leaderboard' ? (
              <LeaderBoard profileData={profileData} />
            ) : studentMain === 'profile' ? (
              <StudentProfile profileData={profileData} setStudentMain={setStudentMain}/>
            ) : (
              <JobDetail demotry={demotry} userDBData={userDBData} setStudentMain={setStudentMain} />
            )}
          </>
        ) : (
          <div className='login-error'>Please log in to view the content.</div>
        )}
      </div>
    </div>
  );
}
