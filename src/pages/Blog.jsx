import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"
export default function Blog({db}){

    const [blog , setBlog] = React.useState([])
    React.useEffect(()=>{ asyncCall()} ,[])


    async function asyncCall() {
    
      const querySnapshottwo = await getDocs(collection(db, "blog"));
      const poststwo = querySnapshottwo.docs.map(doc => ({
        data:doc.data(),
        id:doc.id
      }))
      setBlog(poststwo)
      
    }
    const blgs  = blog.map((dat)=>{  

        return (
            <div className="blg-post">  
            <Link
            to={`${dat.id}`}
            key={dat.id}
            className="blg-title"
        > <h2><u>{dat.id}</u></h2></Link>
            <p className="blg-author">{dat.data.author}</p>
        </div>
        );  
    
    }); 
    return (
        <div className="blg">{blgs}</div>
    )
}