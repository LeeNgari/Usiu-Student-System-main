import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Post from "../components/post"
import Blog from "../components/blog";
export default function home({posts , blogs}){
 
  
    return(
       <div className="home">
            
            <div className="posts">
            {posts && posts.map(msg => <Post title={msg.id} value={msg.data} />)}
            </div>
           <div className="blog">
           {blogs && blogs.map(msg => <Blog title={msg.id} value={msg.data} />)}         
           </div>
       </div>
    )
}