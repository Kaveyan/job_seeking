import React, { useEffect, useState } from 'react';
import authService from '../../features/auth/authService';
import axios from 'axios';
import { toast } from 'react-toastify';
import FreelancerHomeNavbar from '../navbar/Navbar';

function CompanyPostHistory() {
  const [jobsData, setJobsData] = useState([]);
  const handleDelete = async (jobId) =>{
    try{
      const response = await axios.delete(`http://localhost:8000/api/freepost/${jobId}`);
      if(response.status===200){
        setJobsData(jobsData.filter((job)=> job._id !==jobId))
        toast.success('Job Deleted Successfully');
      }else{
        toast.error('Error Deleting job');
      }
    }
    catch(error){
      console.log(error);
      toast.error('An error occured while deleting the job');
    }
  }
  useEffect(() => {
    authService
      .FreelancerPostList()
        .then((data) => {
          setJobsData(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
       <FreelancerHomeNavbar />
       <div className='company-post-history'>
       {jobsData.length > 0 ? (
        jobsData.map((job,index) => (
          <div className='company-post' key={job.id}>
            <div className='post-no'>{index+1}</div>
            <div className='post-des'>{job.title}</div>
            <div className='post-date'>{job.description}</div>
            <div className='post-btn'>
              <button onClick={()=>{
                handleDelete(job._id);
                console.log(job._id)
              }}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No jobs available</p>
      )}
      <a href='/freelancerclients'>
      <button
        className='create-post'
        onClick={() => {
          handleDelete()
        }}
      >
        ➤  
      </button>
      </a>
      
    </div>
    </>
 
  );
}

export default CompanyPostHistory;
