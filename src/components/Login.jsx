import React,{useState} from 'react'
import "../styles/login.css"
import { useDispatch } from 'react-redux';
import {loginUser} from "../redux/slices/authenticationSlice"
import { useNavigate } from 'react-router-dom';


function Login() {

    const [userData, setUserData]= useState({username:"",password:""});
    const [errorMessage, setErrorMessage]= useState({value:""});



    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleInputChange=(e)=>{
        setUserData((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(userData.username==="" || userData.password===""){
            setErrorMessage(prev=>({
                value:"Empty username/password field"
            }))
        } else if(
            userData.username.toLowerCase()==='admin' &&
            userData.password==='123456'
        ){
            dispatch(loginUser());
            navigate("/");

        }else{
            setErrorMessage((prev) => ({ value: "Invalid username/password" }));
            return;

        }


    }


  return (
    <div>
        <form className="login-form" onSubmit={handleSubmit}>
            <h4 className="form-title">
                Login
            </h4>
            <div className="form-control">
                <input type="text"  name="username" placeholder='Username' onChange={handleInputChange}/>
            </div>
            <div className="form-control">
                <input type="password" placeholder='Enter Password' name="password" onChange={handleInputChange}/>
            </div>
            <button className="login-btn" type="submit">
                Login
            </button>
        </form>
    </div>
  )
}

export default Login