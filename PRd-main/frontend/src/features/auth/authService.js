import axios from 'axios';
const API_URL ='http://13.53.38.176/api/users';
const API_URL_free = 'http://13.53.38.176/api/freelancer';
const API_URL_company = 'http://13.53.38.176/api/company';
const API_URL_CreatePost = 'http://13.53.38.176/api/createpost';
const API_URL_ProfileUpdate = 'http://13.53.38.176/api/userprofiledetails';
const API_URL_FreePost = 'http://13.53.38.176/api/freepost';
const API_URL_Apply = 'http://13.53.38.176/api/applyjob';
const API_URL_Apply_List = 'http://13.53.38.176/api/listapplyjob';

const register =async (userData)=>{
    const response =await axios.post(API_URL,userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}
const login = async (userData) => {
      const response = await axios.post(API_URL + '/login', userData);
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      
      }
      return response.data

  }
  
  
  

const StudentDashboard = async (authToken) =>{
    try{
        const response = await axios.get(API_URL+'/me',{
            headers:{
                Authorization:`Bearer ${authToken}`
            }
        });
        return response.data;
    }catch(error){
        throw new Error("Invalid")
    }
  
}

const freeregister = async (freeData)=>{
    const response =    await axios.post(API_URL_free,freeData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;

}

const freelogin = async (freeData) =>{
    const response = await axios.post(API_URL_free+'/free',freeData);

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}
const Companyregister = async (comData)=>{
    const response = await axios.post(API_URL_company,comData);
    if(response.data){
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;

}

const Companylogin = async (comData) =>{
  
        const response = await axios.post(API_URL_company+'/companylogin',comData);
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data));
            console.log(response.data)
        }
        return response.data;
}

const CreatePostCompany = async(post) =>{
    console.log("CREate Post Company",post);
    const response = await axios.post(API_URL_CreatePost,post);
    return response.data;
}

const ListPostCompany = async() =>{
    try{
        const response = await axios.get(API_URL_CreatePost);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        throw new Error("No Field is there");
    }
   
}

const UserProfileDetails = async(data)=>{
    try{
        console.log("From UserProfileDetails",data);
        const response = await axios.get(API_URL_ProfileUpdate+`/${data}`);
        console.log("From UserProfileDetails Response",response.data);
        return response.data
    }catch(error){
        console.log(error)
    }
}

const UserProfileUpdate = async(data)=>{
    try{
        const response = await axios.put(API_URL_ProfileUpdate+`/${data}`);
        return response.data;
    }catch(error){
        throw new Error("Invalid");
    }
} 
const FreelancerPost = async(data)=>{
    try{
        const response = await axios.post(API_URL_FreePost,data);
        return response.data
    }catch(error){
        throw new Error("Invalid");
    }
}

const FreelancerPostList = async () =>{
    try{
        const response = await axios.get(API_URL_FreePost);
        return response.data;
    }
    catch(error){
        throw new Error("Invalid");
    }
}

const ApplyJob = async (applydata)=>{
    try{
        console.log("From Applyjob", applydata)

        const response = await axios.post(API_URL_Apply,applydata);
        return response.data;
    }
    catch(error){
        throw new Error("Invalid");
    }
}



const companyApplyList = async (companyId) =>{
    try{
        console.log("From Company Apply List : ",companyId);

        const response = await axios.get(API_URL_Apply_List+`/${companyId}`);
        return response.data;
    }catch(error){

    }
}


const authService ={
    register,
    login, 
    freeregister, 
    freelogin,
    Companyregister,
    Companylogin,
    CreatePostCompany,
    ListPostCompany,
    UserProfileUpdate,
    FreelancerPost,
    FreelancerPostList,
    StudentDashboard,
    UserProfileDetails,
    UserProfileDetails,
    ApplyJob,
    companyApplyList
}   

export default authService;