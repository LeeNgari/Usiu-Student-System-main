import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function clubDetail({db}){

    const [info, setInfo] = React.useState([]);
    const { id } = useParams()
    
    async function data(){
      

        const docRef = doc(db, "Sports", `${id}`);
        const docSnap = await getDoc(docRef);
        setInfo(docSnap.data())
    }
    React.useEffect(()=>{ data()} ,[])
    return (
        <div className="club-detail">
            <nav className="club-nav">

            <NavLink
                            to="."
                        >
                            About
                        </NavLink>
                        
                        <NavLink
                            to="posts"
                        >
                            Posts
                        </NavLink>
                        
                        <NavLink
                            to="Chat"
                        >
                            Chat
                        </NavLink>
            </nav>

            <Link
                to=".."
                relative="path"
       
            > <span          className="back-button">Back to all Clubs</span></Link>

             <Outlet 
               context={info} 
             />
        </div>
    )
}
