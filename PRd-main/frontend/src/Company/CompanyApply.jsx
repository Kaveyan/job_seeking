import React from 'react'
import Harizibam from '../images/Harizibam.jpg'
import authService from '../features/auth/authService';
import { useState,useEffect } from 'react';

function CompanyApply({companyUser,setResumeProfile}) {
    const [companyapplylist,setCompanyApplyList] = useState([]);
    const [allStudentDetails,setAllStudentDetails] = useState([]);
    useEffect(()=>{
        authService
            .companyApplyList(companyUser._id)
                .then((data)=>{
                    console.log("From UseEffect in Company Apply : ",data);
                    setCompanyApplyList(data);
                    
                })
        const fetchData = async () => {
            const allStudentData = [];
                    
            for (const data of StudentIdentity) {
                try {
                    const response = await authService.UserProfileDetails(data);
                    console.log("User Profile Data", response);
                    allStudentData.push(response);
                } 
                catch(error){
                    console.error("Error fetching user profile data:", error);
                }
            }
            console.log("All student Data",allStudentData);
            setAllStudentDetails(allStudentData);
        };    
        fetchData();
    },['',setAllStudentDetails]);

    const StudentIdentity = companyapplylist.map((student)=>{
            return student.studentId;
    })
    console.log("STudent Details ",allStudentDetails)
    return (
        <div className='companyapply'>
            {
                    allStudentDetails.map((student,index)=>(
                        <div className='companyapply-seekers' key={index}>
                        <img src={Harizibam} alt="#" className='companyapply-seekers-img'/>
                        <div className='company-seekers-details'>
                            <span>{student.name}</span>
                            <h2>{student.areaofinterest}</h2>
                            <button onClick={()=>{
                                console.log("CLICKED")
                                console.log("Student ",student)
                                setResumeProfile(student)
                            }}>View</button>
                        </div>
                    </div>
                    ))
            }
        </div>
  )
}

export default CompanyApply
