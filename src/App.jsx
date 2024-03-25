import './App.css'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import React from 'react';
import LogIn from './pages/LogIn';
import Header from './components/header'
import Home from "./pages/home"
import Clubs from "./pages/clubs"
import ClubDetail from "./pages/club-detail"
import ClubInfo from './components/ClubInfo';
import ClubPosts from './components/ClubPosts';
import IndiClubPost from './pages/IndiClubPost';
import ClubChat from  './components/ClubChat'
import Sports from './pages/sports'
import SportsDetail from "./pages/sport-detail"
import SportsInfo from './components/SportInfo';
import SportsPosts from './components/SportPost';
import IndiSportPost from './components/indi-sport-post'
import SportsChat from  './components/SportChat'
import Post from './pages/Post';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Leader from './pages/leaders'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


import { collection, getDocs } from "firebase/firestore";

function App() {
    
  const [info, setInfo] = React.useState([]);
  const [blog , setBlog] = React.useState([])

  const firebaseConfig = {
    apiKey: "AIzaSyDXHl9seeccc6ZQdjS9k5TGdTn3hTbHTqk",
    authDomain: "student-system-77461.firebaseapp.com",
    projectId: "student-system-77461",
    storageBucket: "student-system-77461.appspot.com",
    messagingSenderId: "254184327638",
    appId: "1:254184327638:web:c3c75a62b552e1f5c1fc77"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)
  

  React.useEffect(()=>{ asyncCall()} ,[])


  async function asyncCall() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map(doc => ({
      data:doc.data(),
      id:doc.id
    }))
    setInfo(posts)
    

    const querySnapshottwo = await getDocs(collection(db, "blog"));
    const poststwo = querySnapshottwo.docs.map(doc => ({
      data:doc.data(),
      id:doc.id
    }))
    setBlog(poststwo)
  }
  
  return (
    <>
       <BrowserRouter>
        <Header 
           auth = {auth}
        /> 
        <Routes>
          <Route path="/" element={<LogIn  

             app = {app}
             auth = {auth}
            
           />} />
            
          <Route path='home' element={<Home  

             posts={info}
             blogs = {blog}
          />} />
          <Route path="home/:id" element={<Post  db = {db}/>} />
          <Route path="/clubs" element={<Clubs 
            db = {db}
          />} />
          <Route path="clubs/:id" element={<ClubDetail  db = {db}/>}>

              <Route index element={<ClubInfo />} />
              <Route path="posts" element={<ClubPosts  db = {db}/>} />
              <Route path="posts/:id" element={<IndiClubPost  db = {db}/>} />
              <Route path="chat" element={<ClubChat db = {db} auth = {auth} />} />
          </Route>
          <Route path="/blog" element={<Blog db = {db}/>} />
          <Route path="blog/:id" element={<BlogDetail  db = {db}/>}></Route>
          <Route path="/sports" element={<Sports 
            db = {db}
          />} />
          <Route path="sports/:id" element={<SportsDetail  db = {db}/>}>

              <Route index element={<SportsInfo />} />
              <Route path="posts" element={<SportsPosts  db = {db}/>} />
              <Route path="posts/:id" element={<IndiSportPost  db = {db}/>} />
              <Route path="chat" element={<SportsChat db = {db} auth = {auth}/>} />
          </Route>
          <Route path="/leader" element={<Leader />} />
          {/* 
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/leaders" element={<Leaders />} />
            */} 
        </Routes>
        <footer><h6>© 1997-2024 Blackboard Inc. All Rights Reserved.</h6></footer>
          
    </BrowserRouter>
    </>
  )
}

export default App
