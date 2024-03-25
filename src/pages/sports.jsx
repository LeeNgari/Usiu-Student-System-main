import React from "react";
import { collection, getDocs } from "firebase/firestore";
import Sports from "../components/indiSport"
export default function clubs({db}){

    const [clubs , setClubs] = React.useState([])
    React.useEffect(()=>{ asyncCall()} ,[])
    

      async function asyncCall() {
  
        const querySnapshottwo = await getDocs(collection(db, "Sports"));
        const poststwo = querySnapshottwo.docs.map(doc => ({
          data:doc.data(),
          id:doc.id
        }))
        setClubs(poststwo)
      }
    return(
      <div className="clubs">

        <div className="tags">
            <button className="tag">Team Sports</button>
            <button className="tag">Individual Sports</button>
            <button className="tag">Combat Sports</button>
            <button className="tag">Water Sports</button>
            <button className="tag">Combat Sports</button>
            <button className="tag">Racket Sports</button>
            <button className="tag">Equestrian Sports</button>
        </div>
        <div className="main-clubs">
            {clubs && clubs.map(club => <Sports  about={club.data.About} name={club.id}  />)}
        </div>
      </div>
    )
}