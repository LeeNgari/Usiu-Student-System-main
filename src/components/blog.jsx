import React from "react";
import { Link } from "react-router-dom"

export default function blog({title ,value}){

    return(
        <div className="blog-post">
            <Link
            to={`blog/${title}`}
            key={title}
            className="post-title2"
        > <h2>{title}</h2></Link>
            <div className="blog-author">
                <h5>{value.author}</h5>
                <h5>2/02/2024</h5>
            </div>
        </div>
    )
}