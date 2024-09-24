import React from 'react';
import CompanyLoginImg from '../images/company.png';
import { Link, useNavigate } from 'react-router-dom';
import './Student_dashboard.css'
import {useSelector,useDispatch} from 'react-redux'
import { useState,useEffect } from 'react';
import {toast} from 'react-toastify';
import { reset, companyLogin } from '../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';

function CompanyLogin({ setCompanyAuthToken,setCompanyUser }) {
    const [companylogin,setCompanyLogin] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch()
    function handleChange({currentTarget:input}){
        setCompanyLogin({...companylogin,[input.name]:input.value})
      }

      const handleClick = async(e)=>{
        e.preventDefault();
  dispatch(companyLogin(companylogin));
        
      }
      const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth);
     
      
  useEffect((()=>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess && user){
      console.log(user.token)
      setCompanyUser(user);
      setCompanyAuthToken(user.token);
      navigate('/companydashboard');
    }
    dispatch(reset());
  }),[user, isError, isLoading, isSuccess, message]);
  if(isLoading){
    <Spinner/>
  }

  return (
    <div>
   
    <div className='company-sign'>
        <div className='company-sign-box'>
            <div className='companysign-left'>
                    <form action="" className='company-signin'>
                    <h2>Login</h2>
                    <div className='company-signin-email'>
                        <label htmlFor="">Email*</label>
                        <input type="text" placeholder='Email...' name='email' value={companylogin.email}  onChange={handleChange}  required/>
                    </div>
                    <div className='company-signin-password'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password...' name="password" value={companylogin.password} onChange={handleChange} />
                    </div>
                    <button type='button' className='company-signin-btn' onClick={handleClick}>Login</button>
                    <div className='company-signup-bottom'>
                        <label htmlFor="">New?</label>
                        <Link to='/companysign'>
                            <button className='signintosignup' >Sign up</button>
                        </Link>
                        
                    </div>
          </form>
            </div>
            <div className='companysign-right'>
                <img src={CompanyLoginImg} alt="" className='company-sign-img' />
            </div>
        </div>
    </div>

    </div>
  )
}

export default CompanyLogin;




