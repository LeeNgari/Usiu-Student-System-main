import React from "react";
import { Link } from "react-router-dom"
export default function posts({title , value}){
    
  return(
    
        <div className="indi-club-post">  
            <Link
            to={`${title}`}
            key={title}
            className="indi-club-post-title"
        > <h2>{title}</h2></Link>
            <p>{value.text}</p>
            <div className="indi-club-post-author-date">
                <h5>{value.author}</h5>
                <h5>12/01/2024</h5>
            </div>
        </div>
 
    )
}
