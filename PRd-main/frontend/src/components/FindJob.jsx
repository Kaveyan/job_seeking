import React from 'react';
import Filter from './Filter';
import FindSide from './FindSide';
import FindRec from './FindRec';
import './Student_dashboard.css';
function FindJob({studentMain,setStudentMain,setDemoTry,stn,setStn}) {
  return (
    <>
      <div className= 'find-home'>
            <FindSide stn={stn} setStn={setStn} />
            <FindRec studentMain={studentMain} setStudentMain={setStudentMain } setDemoTry={setDemoTry} />
      </div>
    </>

  )
}

export default FindJob;