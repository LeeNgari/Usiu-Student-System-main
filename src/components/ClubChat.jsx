import react from "react"
import Chat from "./chat"
export default function ClubChat({auth ,db}){

    return(
        <div className="club-chat"><Chat  auth = {auth} firestore={db} id={"Clubs"}/></div>
        
        
    )
}