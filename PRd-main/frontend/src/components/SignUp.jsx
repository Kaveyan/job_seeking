import React, { useState , useEffect} from 'react'
import './Student_dashboard.css';
import {useSelector,useDispatch} from 'react-redux'
import SignUpImg from '../images/SignUp.png'
import { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { reset, register } from '../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';

function SignUp() {
  const [data, setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:""
  });

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth);

  useEffect((()=>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess && user){
      navigate('/login')
    }
    dispatch(reset());
  }),[user, isError, isLoading, isSuccess, message]);


  function handleChange({currentTarget:input}){
      setData({...data,[input.name]:input.value})
  }
  const handleClick = async(e)=>{
      e.preventDefault();
      dispatch(register(data))
  }

  if(isLoading){
    <Spinner/>
  }

  return (
    <div className='signup'>
      <div className='signup-box'>
              <div className='signup-left'>
              <img src={SignUpImg} alt="" />
              </div>
              
              <div className='signup-right'>
                <form action="" onSubmit={handleClick} className='signup-form'>
                <h2>Sign up</h2>
                    <div className='signup-div'>
                      <label htmlFor="">First Name</label>
                      <input type="text" placeholder='first name...' name='firstName' value={data.firstName} onChange={handleChange} required/>
                    </div>
                    <div className='signup-div'>
                      <label htmlFor="" >Last Name</label>
                      <input type="text" placeholder='last name...' name='lastName' value={data.lastName} onChange={handleChange} required/>
                    </div>
                    <div className='signup-div'>
                      <label htmlFor="">Email</label>
                      <input type="email" placeholder='email...' name='email' value={data.email} onChange={handleChange} required/>
                    </div>
                    <div className='signup-div'>
                      <label htmlFor="">Password</label>
                      <input type="password" placeholder='password...' name='password' value={data.password} onChange={handleChange} required />
                    </div>
                    <button type='submit' >Sign Up</button>
                    <div className='signup-bottom'>
                      <h1>Already have an account? </h1>
                      <Link to='/login'>Here</Link>
                    </div>
                </form>
                    
              </div>
      </div>
    </div>
  )
}

export default SignUp
