import { createSlice } from '@reduxjs/toolkit'

const initialState={
    isAuthenticated:false
}



export const authenticationSlice=createSlice({
    name:'authentication',
    initialState,
    reducers:{

        loginUser:(state)=>{
            state.isAuthenticated=true;
        },
        logoutUser:(state)=>{
            state.isAuthenticated=false;
        }
        
    }
});

export const {loginUser,logoutUser}= authenticationSlice.actions;

export default authenticationSlice.reducer;
