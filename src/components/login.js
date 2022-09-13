

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {

       const [name, setname] = useState("");
       const [password, setpassword] = useState("");

       const navigate = useNavigate();
       const collectData = () => {
              console.log(name, password);
              // setname(" ");
              // setpassword(" ");
         
              navigate("/home");
           
             
       }

       return (<div>
                      <ul className='nav-ul'>
                             <h3>LogIn page</h3>
                      </ul>
                      <div className='login'>
                             <h1> LogIn</h1>
                             <input className='inputBox' type="text" placeholder='enter username'
                                    value={name} onChange={(e) => setname(e.target.value)}
                             />
                             <input className='inputBox' type="password" placeholder='enter password'
                                    value={password} onChange={(e) => setpassword(e.target.value)}
                             />
                             <button onClick={collectData} className='appButton' type='button'>LogIn</button>
                      </div>
               </div>
       )
}

