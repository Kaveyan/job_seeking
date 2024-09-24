import React, { useEffect, useState } from 'react';
import authService from '../features/auth/authService';
import axios from 'axios';
import { toast } from 'react-toastify';

function CompanyPostHistory({ dashContain, setDashContain,companyUser }) {
  const [jobsData, setJobsData] = useState([]);
  console.log("Jobs Data from COmpany History",jobsData)
  console.log("Company User ",companyUser);
  const handleDelete = async (jobId) =>{
    try{
      const response = await axios.delete(`http://localhost:8000/api/createpost/${jobId}`);
      if(response.status===200){
        setJobsData(jobsData.filter((job)=> job._id !==jobId));
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
  console.log("Company User",companyUser);
  useEffect(() => {
    authService
      .ListPostCompany(companyUser._id)
        .then((data) => {
          setJobsData(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredData = jobsData.filter((data)=>{
    return data.CompanyID == companyUser._id;
  })
  console.log("Filtered Data  ",filteredData)

  return (
    <div className='company-post-history'>
       {filteredData.length > 0 ? (
        filteredData.map((job,index) => (
          <div className='company-post' key={job.id}>
            <div className='post-no'>{index+1}</div>
            <div className='post-des'>{job.profile}</div>
            <div className='post-date'>{job.location}</div>
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
      <button
        className='create-post'
        onClick={() => {
          setDashContain('createpost');
        }}
      >
        +
      </button>
    </div>
  );
}

export default CompanyPostHistory;
