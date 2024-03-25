import React from "react";
import { query, orderBy, limit } from "firebase/firestore";  
import { collection, doc, setDoc ,getDocs, } from "firebase/firestore";
import { serverTimestamp } from 'firebase/firestore'
import { useRef } from 'react';
import { useOutletContext} from "react-router-dom";




function ChatMessage({key ,message , uid ,auth}){
    
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
     
    return (
        <div className={`mesage ${messageClass}`}>
      
       <img className="profle-pic" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCBAUDAf/EADcQAAICAQIDBQUGBQUAAAAAAAABAgMEBREGITESQVFhcRMygZGxInKhwdHhFCQzUnMVI0JTYv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AtIAGmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8bSTbaSXVvkkcjM4m0zGk4q13SXX2Ud18+gHYBHa+MNPlLadd8E+9xT/ADOzhahiZ8XLEvhZt1in9peq6gbIAAAAAAAAAAAAAAAAAAAAAYXXQx6Z3XT7FcFvKXgjMh3G+oSlbXp9TfZilO373cvlz+IHM1zXsjVJuEd68Ze7Xv73mzkD06AqBnTbZRbG2mbhZHpKL2aMABPuGte/1ODx8naOVBb8uli73t4ndKpxr7Ma+u+l7WVy7UfUs7AyoZuHTk18o2QUtvB96+DIrYAAAAAAAAAAAAAAAAAABdSr9XueRqmVbJtt2y238OhaCKqzY9nMyIvutl9WB4gA0gAABOeCLpWaXbU237O17ejW5BiacCR/ksqXjYl+BlUnAAAAAAAAAAAAAAAAAAArjiXHeNreTHblN+0j6S5/Xcscj/Fukzz8WORjre+hP7KXOUfD1/cCCAJcgVAAAOpYPCOP7DRKpS63Nz+D6fgiHaLpdmqZsaYpqqOztn/bH9WWTCKhCMIJKEUlFLuS6EVkAAAAAAAAAAAAAAAAAAAAA4Wr8M4mfN3Uy/h75e84x3jLzaI9fwnqtcn7ONN0fGFmz+T2J5Kca12pyUUu9vZGlZrOmUvazPx0/BT3+gVCo8M6vJ7fwqXrZHb6nSweDr21LPyIQjvzhTvJ/PoSCOv6RJ7LPpXrv+ht0ZuLk/0Mmmz7lib+QR8wsPHwaFRi1quteHVvxb7zYAAAAAAAAAAAAAAAAAAAHN1vV6tJx1Oa7d0/6de+2/m/IDZzs3HwaHblWxrj59X5Jd5E9R4uyLW4afBUQ6e0mt5P4dEcHOzcjPyHflT7c30XdHyS7jXA9cjJyMmXayLp2v8A9y3PL0ALiA6Pdcn4gDB08DXtRwmuxkOcO+u37Sf5olWk8TYudKNV/wDL3vklJ/Zl6P8AUgQCxbYITw7xJPGcMXPk50PlGxvnX6+K+hNU00mnun0fiQfQAAAAAAAAAAAAGtqObVp+HZk3e7Be7/c+5FaZ+Zbn5dmTe95zfRdEu5LyO5xpqDvzY4dcv9ujnLZ9Z/stvxI4AABUoACgAAAAAEs4O1jmtNyJf4ZPr939CJmUZyrkpwk1KD7Sa6polWLZBp6TmrUNPpyVspSW00u6S6m4QAAAAAAAADzvujj0WXz92qLm/NLmehyeKLXVoWVtyc1GHwbAryyyd1krbXvObcpPzZiAWJQAFAAAAAAAAAAEqxLOBMpqWViSfJpWw+j/ACJeV5wla6tdoS/5px+a/YsJdCD6AAAAAAAAcLjN7aJLzsh9QAICACxkABVAAAAAAAAAAB0eHXtrmFt/2r6Msrw9ACLAAEAAAf/Z'></img>
      <p className="p">{message}</p>
    </div>
        
    )
  }


function ChatRoom({auth ,db ,id}){

    const context = useOutletContext();
    const dummy = useRef()
    const [formValue , setFormValue] = React.useState('')
    const [info, setInfo] = React.useState([]);
  
    async function data(){
       

           const querySnapshot = collection(db, `${id}`, `${context.id}`, "messages")
           const nw = query(querySnapshot, orderBy("createdAt"),limit(25))

           const querySnapshot2 = await getDocs(nw)
           const posts = querySnapshot2.docs.map(doc => ({
            data:doc.data(),
          }))
          setInfo(posts)
    }
    React.useEffect(()=>{ data()} ,[])
    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid} = auth.currentUser        
        
        const randomNum = Math.floor(Math.random() * 90000) + 10000;
        await setDoc(doc(db, `${id}`, `${context.id}` , "messages" ,  `${randomNum}`), {
            text:formValue,
            uid,
            createdAt:serverTimestamp()
          });
          setFormValue('')
          
        data()
        dummy.current.scrollIntoView({behaviour : 'smooth'})
      }
    return(
        <div className="cht">
        
        <main> 
        {info && info.map(msg => <ChatMessage auth={auth} uid={msg.data.uid}message={msg.data.text}/>)}
        </main>

        <form className="form" onSubmit={sendMessage} ref={dummy}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <button type="submit">send</button>
        </form>
        
     </div>
    )
}

export default function app({auth, firestore ,id}){

       return(
        <div className="App">
            

            <section>

            {  <ChatRoom  auth={auth} db={firestore} id={id}/> }
            </section>
        </div>    
   )
}