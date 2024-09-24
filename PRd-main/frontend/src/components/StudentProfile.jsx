import './Student_dashboard.css';
import {FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';
import Harizibam from '../images/Harizibam.jpg'
import {useSelector,useDispatch} from 'react-redux'
import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { reset ,UserProfile} from '../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

function StudentProfile({profileData,setStudentMain}) {

    console.log("From Profile",profileData._id)
    const [studentprofile, setStudentProfile] = useState({
        name:profileData.name,
        email:profileData.email,
        contact:profileData.contact,
        location:profileData.location,
        qualification:profileData.qualification,
        qualificationPercentage:profileData.qualificationPercentage,
        skill:profileData.skill,
        acheivement:profileData.acheivement,
        activity:profileData.activity,
        project:profileData.project,
        areaofinterest:profileData.areaofinterest,
        language:profileData.language,
        githublink:profileData.githublink,
        linkedinlink:profileData.linkedinlink,
        discordlink:profileData.discordlink
    });

   
     
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(studentprofile)

    const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth);
    const handleChange = ({currentTarget:input})=>{
        setStudentProfile({...studentprofile,[input.name]:input.value});
    }

    const handleProfileUpdate = async(e)=>{
        e.preventDefault();
        
        try{
            const response = await axios.put(`http://localhost:8000/api/userprofiledetails/${profileData._id}`,studentprofile);
            console.log("From Update Profile :",response.data)
            setStudentMain('findjob')
        }catch(error){
            console.log(error )
        }
    }

    useEffect((()=>{
        if(isError){
          toast.error(message);
        }
        if(isSuccess && user){
            setStudentMain('findjob')
        }
        dispatch(reset());
      }),[user, isError, isLoading, isSuccess, message]);
      if(isLoading){
        <Spinner/>
      }
    
    
  return (
    <div className='student-profile'>
      <div className='student-profile-socials'>
            <div className='student-profile-image'>
                <img src={Harizibam} alt="" className='student-profile-orginal'/>
                <input type="file" className='student-profile-original-file'/>
            </div>
            <div className='student-connection'>
                <div className='profile-social'>
                    <FaGithub className='profile-icons'/>
                    <input type="text" placeholder='Github Link...' value={studentprofile.githublink} onChange={handleChange} name='githublink' className='profile-input' required />
                </div>
                <div className='profile-social' >
                    <BsLinkedin className='profile-icons'/>
                    <input type="text" placeholder='LinkedIn Link...' value={studentprofile.linkedinlink} onChange={handleChange} name='linkedinlink' className='profile-input' required/>
                </div>
                <div className='profile-social'>
                    <FaDiscord className='profile-icons'/>
                    <input type="text"  placeholder='Discord Link...' value={studentprofile.discordlink} onChange={handleChange} name='discordlink' className='profile-input' required/>
                </div>
           
            </div>
      </div>
      <div className='student-profile-details'>
                <h2>Profile</h2>
                <form action="" className='profile-form'>
                        <div className='student-details'>
                            <label htmlFor="">Name:</label>
                            <input type="text"  placeholder='Name...' name='name' value={studentprofile.name} onChange={handleChange} className='student-details-input' required/>
                            
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Email:</label>
                            <input type="text" placeholder='Email...' name='email' value={studentprofile.email} onChange={handleChange} className='student-details-input' required/>
                            
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Contact:</label>
                            <input type="text" placeholder='Contact...' name='contact' value={studentprofile.contact} onChange={handleChange} className='student-details-input' required/>
                            
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Location:</label>
                            <input type="text" placeholder='Location...' name='location' value={studentprofile.location} onChange={handleChange} className='student-details-input' required/>
                            
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Higher Qualification:</label>
                            <input type="text" placeholder='Qualification...' name='qualification' value={studentprofile.qualification} onChange={handleChange} className='student-details-input' required/>
                            
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Higher Qualification Percentage:</label>
                            <input type="text" placeholder='Percentage...' value={studentprofile.qualificationPercentage} onChange={handleChange} name='qualificationPercentage' className='student-details-input' required/>
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Skill:</label>
                            <input type="text" placeholder='Skill...' value={studentprofile.skill} name='skill' onChange={handleChange} className='student-details-input' required/>
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Achievement:</label>
                            <input type="text" placeholder='Achievement...' value={studentprofile.acheivement} name='acheivement' onChange={handleChange} className='student-details-input' required/>
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Activity:</label>
                            <input type="text" placeholder='Activity...' value={studentprofile.activity} name='activity' onChange={handleChange} className='student-details-input' required/>
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Project:</label>
                            <input type="text" placeholder='Project...' value={studentprofile.project} name='project' onChange={handleChange} className='student-details-input' required/>
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Area of Interest:</label>
                            <input type="text" placeholder='Area of Interest' value={studentprofile.areaofinterest} name='areaofinterest' onChange={handleChange} className='student-details-input' required/>
                        </div>
                        <div className='student-details'>
                            <label htmlFor="">Language:</label>
                            <input type="text" placeholder='Language...' value={studentprofile.language} name='language' onChange={handleChange} className='student-details-input' required/>
                        </div>
                        <div className='student-details' id='student-btn-id'>
                           <button className='form-btn' onClick={handleProfileUpdate}>Update</button>
                        </div>
                </form>
                
      </div>
      
    </div>
  )
}

export default StudentProfile
