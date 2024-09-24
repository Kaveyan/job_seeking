import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService'
const user =JSON.parse(localStorage.getItem('user'))

const initialState ={
     user:user? user : null,
     isError:false,
     isLoading:false,
     message: '',
     createdJobs: []
};

 export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError =false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
        logout:(state)=>{
            localStorage.removeItem('user');
            state.isError =false;
            state.isLoading = false;
            state.isSuccess = false;
            state.user =null;
        },

    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(login.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(freeregister.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(freeregister.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(freeregister.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(freelogin.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(freelogin.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(freelogin.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(companyRegister.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(companyRegister.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(companyRegister.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(companyLogin.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(companyLogin.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(companyLogin.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(CreatePostCompany.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(CreatePostCompany.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(CreatePostCompany.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(createdJobs.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(createdJobs.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(createdJobs.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(FreelancerPost.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(FreelancerPost.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(FreelancerPost.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(ApplyJob.pending,(state)=>{
            state.isLoading =true;
        })
        .addCase(ApplyJob.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.isSuccess= true;
            state.user = action.payload;
        })
        .addCase(ApplyJob.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess =false;
            state.user = null;
            state.message = action.payload;
        })

    },
 });

export const register = createAsyncThunk('auth/register',async(user,thunkAPI)=>{
    try{
        return await authService.register(user);
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})
export const login = createAsyncThunk('auth/login',async(user,thunkAPI)=>{
    try{
        return await authService.login(user);
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const freeregister = createAsyncThunk('auth/freeregister',async(user,thunkAPI)=>{
    try{
        return await authService.freeregister(user);
    }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) ||error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const freelogin = createAsyncThunk('auth/freelogin',async(user,thunkAPI)=>{
    try{
        return await authService.freelogin(user);
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const companyLogin = createAsyncThunk('auth/Companylogin',async(user,thunkAPI)=>{
    try{
        return await authService.Companylogin(user);
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const companyRegister = createAsyncThunk('auth/Companyregister',async(user,thunkAPI)=>{
    try{
        return await authService.Companyregister(user);
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


export const CreatePostCompany = createAsyncThunk('auth/CreatePostCompany',async(post,thunkAPI)=>{
    try{
        return await authService.CreatePostCompany(post);
    }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}) 

export const createdJobs  = createAsyncThunk('auth/ListPostCompany',async(thunkAPI)=>{
    try{
        return await authService.ListPostCompany();
    }  catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }

})

export const UserProfileDetails = createAsyncThunk('auth/UserProfileDetails',async(props,thunkAPI)=>{
    try{
        return await authService.UserProfileDetails(props);

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


export const FreelancerPost = createAsyncThunk('auth/FreelancerPost',async(post,thunkAPI)=>{
    try{
        return await authService.FreelancerPost(post);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const StudentDashboard = createAsyncThunk('auth/StudentDashboard',async(authToken,thunkAPI)=>{
    try{
        return await authService.StudentDashboard(authToken);
    }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const ApplyJob = createAsyncThunk('auth/ApplyJob',async(apply,thunkAPI)=>{
    try{
        return await authService.ApplyJob(apply);

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const companyApplyList = createAsyncThunk('auth/companyApplyList',async(companyId,thunkAPI)=>{
    try{
        return await authService.companyApplyList(companyId);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


 export const {reset,logout} =authSlice.actions;
 export default authSlice.reducer;
