import React, { useState, useEffect } from 'react';
import './JobDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { reset, ApplyJob } from '../features/auth/authSlice';
import Spinner from '../Spinner/Spinner';

const JobDetail = ({ demotry, userDBData, setStudentMain }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [applyJob, setApplyJob] = useState({
    jobId: "",
    companyId: "",
    studentId: "",
    status: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const HandleApply = async () => {
    if (isLoading) {
      return; 
    }

    setIsLoading(true); 

    setApplyJob({
      jobId: demotry._id,
      companyId: demotry.CompanyID,
      studentId: userDBData._id,
      status: "pending"
    });

    try {
      await dispatch(ApplyJob(applyJob));
      setIsLoading(false);
      setStudentMain('findjob');
    } catch (error) {
      setIsLoading(false); 
      toast.error(error.message);
    }
  };

  const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      setStudentMain('findjob');
    }
    
    dispatch(reset());
  }, [user, isError, isSuccess, message]);

  return (
    <div className='job-details-container'>
      {demotry ? (
        <div>
          <div className='job-header'>
            <h2>{demotry.profile}</h2>
            <ul className='job-details'>
              <li>{demotry.companyName}</li>
              <li>{demotry.location}</li>
              <li>Posted days ago</li>
            </ul>
          </div>
          <div className='job-content'>
            <div className='job-section'>
              <h2>About the Business and the Role</h2>
              <p>{demotry.experience}</p>
            </div>
            <div className='job-section'>
              <h2>Job Tasks and Responsibilities</h2>
              <p>{demotry.salary}</p>
            </div>
            <div className='job-section'>
              <h2>Skills and Experience</h2>
              <p>{demotry.technology.join(', ')}</p>
            </div>
          </div>
          {isLoading ? (
            <Spinner /> // Render the Spinner component when isLoading is true
          ) : (
            <button className='job-apply' onClick={HandleApply} disabled={isLoading}>
              {isLoading ? 'Applying...' : 'Apply Now'}
            </button>
          )}
        </div>
      ) : (
        <div className='login-error'>
          <h2>No job details found</h2>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
