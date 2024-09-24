import React, { useEffect } from 'react';
import { useState } from 'react';
import './Student_dashboard.css';
import { useSelector, useDispatch} from 'react-redux';
import {useNavigate , Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {reset, freeregister} from '../features/auth/authSlice';
import Spinner from '../Spinner/Spinner';


function FreelancingSign() {

  const [freesignup, setFreesignup] = useState({
    businessName:"",
    owner:"",
    contact:"",
    email:"",
    businessType:"",
    password:"",
  });

  const navigate = useNavigate()
  const dispatch = useDispatch();

 
  const freesignupChange =({currentTarget:input})=>{
    setFreesignup({...freesignup,[input.name]:input.value});
  }
 
  const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth)

  const handleFreeSign =(e)=>{
    e.preventDefault();
    dispatch(freeregister(freesignup));
  }

  
  useEffect((()=>{
    if(isError){
      toast.error(message);
    }
  

    if(isSuccess && user){
      navigate('/freelogin')
    }

    dispatch(reset());
  }),[user, isError, isLoading, isSuccess, message]);

  if(isLoading){
    <Spinner/>
  }

  return (
    <div className='freelancing-sign'>
        <div className='free-sign-left'>
                <h2>---Become a Seller</h2>
                <h1>Design, Code, </h1>
                <h3>Success</h3>
                <Link to='/freelogin'>
                <button>Login  ---</button>
                </Link>   
        </div>
        <div className='free-sign-right'>
        
          <div className='free-sign-box'>
                <form action="" className='free-signup'  onSubmit={handleFreeSign}>
              <h2>Join Now</h2>
              <div className='free-signup-name'>
                      <label htmlFor="">Business Name*</label>
                      <input type="text" placeholder='Business name...' name='businessName' value={freesignup.businessName} onChange={freesignupChange}/>
              </div>
              <div className='free-signup-owner'>
                      <label htmlFor="">Owner</label>
                      <input type="text" placeholder='Owner...' name='owner' value={freesignup.owner} onChange={freesignupChange} />
              </div>
              <div className='free-signup-contactnumber'>
                      <label htmlFor="">Contact Number*</label>
                      <input type="number" placeholder='Contact Number...' name='contact' value={freesignup.contact}  onChange={freesignupChange}  />
                </div>
                <div className='free-signup-email'>
                      <label htmlFor="">Email*</label>
                      <input type="email" placeholder='Email...' name='email' value={freesignup.email}  onChange={freesignupChange}  />
                </div>
                <div className='free-signup-type'>
                      <label htmlFor="">Type of Business</label>
                      <input type="text" placeholder='Type of Business...' name='businessType' value={freesignup.businessType}  onChange={freesignupChange}  />
                </div>
                <div className='free-signup-password'>
                      <label htmlFor="">Password</label>
                      <input type="password" placeholder='Password...' name='password' value={freesignup.password}  onChange={freesignupChange}  />
                </div>
                <div className='free-btn-div'>
                <button className='free-signup-btn' type='submit'>Join Now ---</button>
                </div>
        </form>   
          </div>
        </div>
    </div>
  )
}

export default FreelancingSign
