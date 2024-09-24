import React, { useEffect, useState } from 'react';
import './Student_dashboard.css';
import { BsBookmarkFill } from 'react-icons/bs';
import img from '../images/google.png';
import authService from '../features/auth/authService';
import JobDetail from './JobDetail';

function FindRec({ studentMain, setStudentMain ,setDemoTry}) {
  const [jobList, setJobList] = useState([]);
  console.log("Job List: ",jobList);
  const [selectedJob, setSelectedJob] = useState(null);
  useEffect(() => {
    authService
      .ListPostCompany()
      .then((data) => {
        setJobList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (job) => {
    console.log('Clicked job:', job); 
    setDemoTry(job);
    setStudentMain('jobdetails');
  };

  return (
    <div className='find-rec'>
      <div className='find-header'>
        <span>Recommended jobs</span>
        <div className='sortby'>
          <h2>Sort by: <span>Last updated</span></h2>
        </div>
      </div>
      <div className='job-list'>
        {jobList.map((job) => (
          <div className='box' key={job._id}>
             <div className='innder-box'>

              <div className='box-main'>
                <div className='box-details'>
                  <span className='company-name'>{job.companyName}</span>
                  <h3 className='job-position'>{job.profile}</h3>
                </div>
                <img src={img} alt='' className='company-logo' />
              </div>
              <ul className='job-types'>
                <li>Part time </li>
                <li>{job.experience}</li>
                <li>Intern </li>
              </ul>
            </div>
            <div className='lower-box'>
              <div className='box-details'>
                <h2 className='salary'>{job.salary}</h2>
                <h2 className='work-location'>{job.location}</h2>
              </div>
              <button className='box-btn' onClick={() => handleClick(job)}>Details</button>
            </div>
          </div>
        ))}
        {jobList.length === 0 && <p>No job Available</p>}
      </div>
      {studentMain === 'jobdetails' && (
        <JobDetail job={jobList} /> // Pass the selectedJob prop to JobDetail
      )}
    </div>
  );
}

export default FindRec;
