import React from "react";
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
export default function post({db}){

    const [author, setAuthor] = React.useState("");
    const [text, setText] = React.useState("");
    const { id } = useParams()
    async function data(){

      

        const docRef = doc(db, "posts", `${id}`);
        const docSnap = await getDoc(docRef);
        setAuthor(docSnap.data().author)
        setText(docSnap.data().value)
        console.log(author)
    }
    React.useEffect(()=>{ data()} ,[])
    return(
        <div className="indi-post">
          <div className="post-titl"><h3>{id}</h3></div>
          <div className="post-author"><h6>{author}</h6></div>
          <div className="post-text"><p>{text}</p></div>
        </div>
    )
}