import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    
    const navigate = useNavigate();
    const logoutfn=()=>{
        navigate("/");
    }
  return (
    <div>
        <button onClick={logoutfn} type="submit">logout</button>
    </div>
  )
}
