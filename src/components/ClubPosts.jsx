import React from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Post from "./indi-club-post"
export default function ClubPost({db}){

    const [info, setInfo] = React.useState([]);
    const { id } = useParams()
  

    async function data(){
      

        

        const querySnapshot = await getDocs(collection(db, "Clubs", `${id}`, "events"));

        const posts = querySnapshot.docs.map(doc => ({
            data:doc.data(),
            id:doc.id
          }))
          setInfo(posts)
          console.log(info)
    }

    React.useEffect(()=>{ data()} ,[])
    return(
        <div className="events">
                 {info && info.map(msg => <Post title={msg.id} value={msg.data} />)}
        </div>
    )
}