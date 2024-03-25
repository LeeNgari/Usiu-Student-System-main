import React from "react";
import { collection, getDocs } from "firebase/firestore";
import Clubs from "../components/indiClub"
export default function clubs({db}){

    const [clubs , setClubs] = React.useState([])
    React.useEffect(()=>{ asyncCall()} ,[])
    

      async function asyncCall() {
  
        const querySnapshottwo = await getDocs(collection(db, "Clubs"));
        const poststwo = querySnapshottwo.docs.map(doc => ({
          data:doc.data(),
          id:doc.id
        }))
        setClubs(poststwo)
      }
    return(
      <div className="clubs">

        <div className="tags">
            <button className="tag">nature</button>
            <button className="tag">intellectual</button>
            <button className="tag">language</button>
            <button className="tag">international</button>
            <button className="tag">differentlly abled</button>
            <button className="tag">IT</button>
            <button className="tag">fun</button>
        </div>
        <div className="main-clubs">
            {clubs && clubs.map(club => <Clubs image={club.data.image} about={club.data.About} name={club.id}  tags={club.data.tags} />)}
        </div>
      </div>
    )
}