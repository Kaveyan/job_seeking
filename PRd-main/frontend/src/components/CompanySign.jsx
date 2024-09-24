import React from 'react';
import CompanyLogin from '../images/company.png';
import './Student_dashboard.css'
import {useSelector,useDispatch} from 'react-redux'
import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import { reset, companyRegister } from '../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';
function CompanySign() {
    const [companysign,setCompanySign] = useState({
        companyName:"",
        owner:"",
        address:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        email:"",
        contact:"",
        nominalcapital:"",
        industry:"",
        website:"",
        password:"",
        description:""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
  
      const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth);
  
    useEffect((()=>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess && user){
      navigate('/companylogin')
    }
    dispatch(reset());
    }),[user, isError, isLoading, isSuccess, message]);

    const handleChange= ({currentTarget:input}) =>{
        setCompanySign({...companysign,[input.name]:input.value});
    }
    
    const handleClick = async(e)=>{
        e.preventDefault();
        dispatch(companyRegister(companysign));
      }

    if(isLoading){
      <Spinner/>
    }
  
  
      return (
    <div className='company-sign'>
        <div className='company-sign-box'>
            <div className='companysign-left'>
               
                <form className='company-signup' >
                    <h2 className='com-singup'>Sign Up</h2>
                    <div className='company-row'>
                 
                        <div className='companyname'>
                            <label htmlFor="" className='company-label'>Company name*</label>
                            <input type="text" placeholder='Company name...' className='company-sign-input' name='companyName' value={companysign.companyName} onChange={handleChange} required/>
                        </div>
                        <div className='owner'  id='companyName'>
                            <label htmlFor="" className='company-label'>Owner*</label>
                            <input type="text"placeholder='Owner...' name='owner' className='company-sign-input' value={companysign.owner} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className='company-row'>
                        <div className='company-address'>
                            <label htmlFor="" className='company-label'>Company mailing address</label>
                            <input type="text" placeholder='Street Address' id='address' className='company-sign-input' name='address' value={companysign.address} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className='company-row' id='city'>
                            <input type="text" placeholder='City'  className='company-sign-input' name='city' value={companysign.city} onChange={handleChange} required/>
                            <input type="text" placeholder='State' className='company-sign-input' name='state' value={companysign.state} onChange={handleChange} required/>
                            <input type="text" placeholder='Zip Code' className='company-sign-input' name='zipcode' value={companysign.zipcode} onChange={handleChange} required/>
                            <input type="text" placeholder='Country' className='company-sign-input' name='country' value={companysign.country} onChange={handleChange} required/>
                            <div className='company-sign-email'>
                                <label htmlFor="" className='company-label'>Email*</label>
                                <input type="email" placeholder='email' className='company-sign-input' name='email' value={companysign.email} onChange={handleChange} required/>
                            </div>
                            <div className='company-sign-number'>
                                <label htmlFor="" className='company-label'>Phone number*</label>
                                <input type="number" placeholder='contact' className='company-sign-input' name='contact' value={companysign.contact} onChange={handleChange} required/>
                            </div>
                            <div className='company-sign-capital'>
                                <label htmlFor=""className='company-label'>Nominal capital</label>
                                <input type="text" placeholder='nominalcapital' className='company-sign-input' name='nominalcapital' value={companysign.nominalcapital} onChange={handleChange} required/>
                            </div>
                            <div className='company-sign-industry'> 
                                <label htmlFor=""className='company-label'>Industry*</label>
                                <input type="text" placeholder='industry' className='company-sign-input' name='industry' value={companysign.industry} onChange={handleChange} required/>
                            </div>
                            <div className='company-website'> 
                                <label htmlFor="" className='company-label'>Website</label>
                                <input type="text" placeholder='website' className='company-sign-input' name='website' value={companysign.website} onChange={handleChange} required/>
                            </div>
                            <div className='company-password'>
                                <label htmlFor="" className='company-label'>Password*</label>
                                <input type="password" placeholder='password' className='company-sign-input' name='password' value={companysign.password} onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className='company-description'>
                                <label htmlFor="" className='company-label'>Company description</label>
                                <input type="text" placeholder='description' className='company-sign-input' name='description' value={companysign.description} onChange={handleChange} required/>
                        </div>
                        <button type='button' onClick={handleClick} className='company-signup-btn'>Sign up</button>
             
                        <div className='company-signin-bottom'>
                                <label htmlFor="">Already?</label>
                                <Link to='/companylogin'>
                                <button className='signuptosignin' >Sign In</button>
                                </Link>
                                
                        </div>
                </form> 
                
            </div>
            <div className='companysign-right'>
                <img src={CompanyLogin} alt="" className='company-sign-img' />
            </div>
        </div>
    </div>
  )
}

export default CompanySign
