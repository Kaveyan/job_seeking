import { useEffect, useState } from "react";
import { Typography, styled, Box, TextField, Button } from '@mui/material';
import Dropdown from "./Dropdown";
import {reset,CreatePostCompany} from '../features/auth/authSlice';
import {toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

    const Component = styled(Box)({
        // background: '#F5F5F5',
        padding: '0px 200px'
    })

    const Container = styled(Box)({
        display: 'flex',
        background: '#FFFFFF',
        // borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
        '& > p': {
            fontSize: 35,
            fontWeight: 700
        }
    })

    const FormWrapper = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        marginTop: 2,
        background: '#FFFFFF',
        // borderRadius: 20,
        '& > *': {
            marginTop: '20px !important'
        }
    })
    
   
    const options = {
    type: ['Online', 'Offline'],
    experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
    technology: ['Java', 'JavaScript', 'React', 'Angular', 'Node.js', 'Docker', 'AWS', 'HTML', 'CSS'],
    salary: ['Rs 0-300000', 'Rs 300000-500000', 'Rs 500000-800000', 'Rs 800000-1000000', 'Rs 1000000-1500000', 'Rs 1500000-2000000', 'Rs 2000000 or more']
    }
    const Postjob = ({ setDashContain,companyUser }) => {
        console.log("Company ID: ",companyUser._id)
        const defaultObj = {
            companyName:companyUser.companyName,
            profile: '',
            type: '',
            location:'',
            description: '',
            experience: '',
            technology: [],
            salary: '',
            CompanyID:companyUser._id
        }
        console.log("From Post JOB ",defaultObj)
    const [data, setData] = useState(defaultObj);
    console.log(data)
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();
    const {user,isError,isLoading, isSuccess, message} = useSelector((state)=> state.auth);
    const handleClick = async()=>{
        try{
            console.log("Clicked");
            dispatch(CreatePostCompany(data));
            setDashContain('job');
            
        }catch(error){
            console.log(error);
        }
      
    }
    useEffect(()=>{
        if(isError){
            toast.error(message);
        }
        if(isSuccess){
            console.log("I got it");
        
        }
        dispatch(reset());
    },[user, isError, isLoading,message]);

    


    return (
        
        <div className="company-job">
            <Component>
                <FormWrapper>
                    <TextField
                        placeholder="Company Name..."
                        onChange={handleChange}
                        name="companyName"
                        value={data.companyName}
                    />
                    <TextField
                        placeholder="Job title"
                        onChange={handleChange}
                        name="profile"
                        value={data.profile}
                    />
                    <Dropdown 
                        id='job-type-label'
                        value={data.type}
                        onChange={handleChange}
                        name="type"
                        label="Job Type"
                        options={options.type}
                    />
                 
                    <TextField
                        placeholder="Job description"
                        onChange={handleChange}
                        name="description"
                        value={data.description}
                    />
                       <TextField
                        placeholder="Location..."
                        onChange={handleChange}
                        value={data.location}
                        name="location"
                    />
                    <Dropdown 
                        id='experience-label'
                        value={data.experience}
                        handleChange={handleChange}
                        name="experience"
                        label="Experience"
                        options={options.experience}
                    />
                    <Dropdown 
                        id='technology-label'
                        value={data.technology}
                        handleChange={handleChange}
                        name="technology"
                        label="Technology"
                        options={options.technology}
                        multiple
                    />
                    <Dropdown 
                        id='salary-label'
                        value={data.salary}
                        handleChange={handleChange}
                        name="salary"
                        label="Salary"
                        options={options.salary}
                    />
                    <Button variant="contained" onClick={()=>{
                        console.log("Harizibam")
                        handleClick()
                    }} >Post Job</Button>
                </FormWrapper>
            </Component>
        </div>
    )
}
  



 

export default Postjob;