import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CompanySign from './components/CompanySign';
import FreelancingSign from './components/FreelancingSign'
import SignUp from './components/SignUp'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/inject-style'
import StudentDashBoard from './components/Student_dashboard'
import FreelancingLoginIn from './components/FreelancingLoginIn';
import CompanyLogin from './components/CompanyLogin'
import JobDetail from './components/JobDetail';
import CompanyDashboard from './Company/Main';
import FreelancerHome from './Freelance/home/Home';
import FreelancerCreatePost from './Freelance/post/post';
import FreelancerClients from './Freelance/clients/clients'
import FreelacnerMessage from './Freelance/message/message';
import FreelancerPayment from './Freelance/payment/payment';
import FreelancerScan from './Freelance/scan/scan';
import FreePostList from './Freelance/Jobs/FreelancerPost'
import { useState } from 'react';



function App() {
  const [authToken, setAuthToken] = useState('');
  const [companyauthToken,setCompanyAuthToken]= useState('');
  const [freeauthToken,setFreeAuthToken] = useState('');
  const [userDBData, setUserDBData] = useState(null);
  const [companyUser,setCompanyUser] = useState(null);
  const [profileData, setProfileData] = useState(null);


  console.log("From App",userDBData)
  console.log("From CompanyUser",companyUser)
  return (
    <>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/login' element={<Login setAuthToken={setAuthToken} setUserDBData={setUserDBData}/>}/>
              <Route path='/companysign' element={<CompanySign/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/freelancingsign' element={<FreelancingSign/>}/>
              <Route path='/studentdashboard' element={<StudentDashBoard  authToken={authToken} userDBData={userDBData} profileData={profileData} setProfileData={setProfileData} />}/>
              <Route path='/freelogin' element={<FreelancingLoginIn setFreeAuthToken={setFreeAuthToken}/>}/>
              <Route path='/companylogin' element={<CompanyLogin setCompanyAuthToken={setCompanyAuthToken} setCompanyUser={setCompanyUser}/>} />
              <Route path='/jobdetails' element={<JobDetail/>}/>
              <Route path='/companydashboard' element={<CompanyDashboard companyauthToken={companyauthToken} companyUser={companyUser} profileData={profileData} setProfileData={setProfileData} />}/>
              <Route path="/freelancerhome" element={<FreelancerHome />} />
              <Route path="/freelancerpost" element={<FreelancerCreatePost />} />
              <Route path="/freelancerclients" element={<FreelancerClients />} />
              <Route path='/freepostlist' element={<FreePostList/>}/>
              {/* <Route path="/freelancerjobs" element={<FreelancerJobs/>} /> */}
              <Route path="/freelancermessage" element={<FreelacnerMessage/>} />
              <Route path="/freelancerpayment" element={<FreelancerPayment/>} />
              <Route path="/freelancerscan" element={<FreelancerScan/>} />
            </Routes>
          </div>
       </Router>
      <ToastContainer/>
    </>
    
    
  );
}

export default App;
