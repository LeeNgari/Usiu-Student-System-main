import React from "react";
import { Link } from "react-router-dom"

export default function posts({title , value}){
    
console.log(title)
  return(
    
        <div className="indi-club-post">  
            <Link
            to={`${title}`}
            key={title}
            className="indi-club-post-title"
        > <h2>{title}</h2></Link>
            <p></p>
            <div className="indi-club-post-author-date">
                <h5></h5>
                <h5>12/01/2024</h5>
            </div>
        </div>
 
    )
}
