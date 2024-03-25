import React from "react";
import { Link } from "react-router-dom"

export default function clb({about ,name}){

      
    return (
       
        <div className="club" >
           <Link
              to={`${name}`}
              key={name}
           ><button className="clb" >{name}</button></Link>
            
        </div>
        
   
    )
}