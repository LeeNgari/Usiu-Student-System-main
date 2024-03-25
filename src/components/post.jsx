import React from "react";
import { Link } from "react-router-dom"

export default function posts({title , value}){
    const trans = value.value.slice(0, 200)
  return(
    
        <div className="post">  
            <Link
            to={`${title}`}
            key={title}
            className="post-title"
        > <h2>{title}</h2></Link>
            <p>{trans}</p>
            <div className="author-date">
                <h5>{value.author}</h5>
                <h5>12/01/2024</h5>
            </div>
        </div>
 
    )
}
