import React from "react";

import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword  } from 'firebase/auth';

export default function logIn({app, auth}){


    const navigate = useNavigate();
    const [email, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
       
    }
      
    return (
        <div className="log-in-page">
           
           <img src="https://pbs.twimg.com/profile_images/1638429578015256580/ijtKwOcA_400x400.jpg" alt="school logo"  />
           <form  className="log-in-form">
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={handleUsernameChange} className="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} className="password"/>
                </div>
                <button type="submit" className="submit-button"  onClick={onLogin}>Login</button>
           </form>
        
        </div>
    )
}