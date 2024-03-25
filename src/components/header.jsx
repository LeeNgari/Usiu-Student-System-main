import React from "react";
import { Link, useLocation } from "react-router-dom"
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function header({auth}){

    const [showButton, setShowButton] = React.useState(false);
    const navigate = useNavigate();
    const toggleButton = () => {
      setShowButton(!showButton);
    };

    const location = useLocation()
    if (location.pathname === "/"){
        return null
    }
    const handleLogOut = () =>{
     
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            console.log("sign out not successful")
            console.log(error)
          });
    }
   
    return(
        <>
         <header>
          <div className="header-top">
              <Link  to="/home"><img className="site-logo"src="https://www.usiu.ac.ke/webapp/assets/image/usiu-logo-blue.png"></img></Link>

              <div className="profile">
                  <h3>Hi, Lee</h3>
                  <button onClick={toggleButton}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></button>
                   <div className="sign-out-profile">
                         { showButton && <button className="sign-out" onClick={handleLogOut}>Sign Out</button>}
                    </div>
              </div>
              
          </div>
          
          <nav>
            <Link className="nav-links"  to="/home">Home</Link>
            <Link className="nav-links"  to="/clubs">Clubs</Link>
            <Link className="nav-links"  to="/sports">Sports</Link>
            <Link className="nav-links"  to="/blog">Blog</Link>
            <Link className="nav-links"  to="/leader">Leaders</Link>
          </nav>
         
        </header>
        </>
    )
}
