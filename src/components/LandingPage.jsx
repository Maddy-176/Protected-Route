import React from 'react'
import { useDispatch } from "react-redux";
import {logoutUser} from "../redux/slices/authenticationSlice"

function LandingPage() {

  const dispatch= useDispatch();
  return (
    <div>
      <h2>Landing Page</h2>
      <p>You are now logged in</p>

      <b/>
      <button onClick={()=>dispatch(logoutUser())}>Logout</button>
    </div>
  )
}

export default LandingPage