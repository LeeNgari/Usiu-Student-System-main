import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export default function IndiClubPost({db}){
   
    const context = useOutletContext();
    
    const [title, setTitle] = React.useState([]);
    const [author, setAuthor] = React.useState([]);
    const [text, setText] = React.useState([]);

    const { id } = useParams()
  

    async function data(){
      
        const docRef = doc(db, "Clubs", `${context.id}` ,"events", `${id}`);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setAuthor(docSnap.data().author)
          setTitle(docSnap.id)
          setText(docSnap.data().text)
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    }

    React.useEffect(()=>{ data()} ,[])
    return(
        
        <div className="indi-post">
          <div className="post-titl"><h3>{title}</h3></div>
          <div className="post-author"><h6>{author}</h6></div>
          <div className="post-text"><p>{text}</p></div>
        </div>
    )
}