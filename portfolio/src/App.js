import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Profile from './images/Profile.jpeg'
import Icon from './Components/icon'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumSquare} from "react-icons/ai"




function App() {
  return (
    <div >
      {/* <NavBar/> */}
         <h1 className='Profile' style={{ fontSize: '200px' }}> Jacky Lin</h1> 
         <img  className='Profile' src={Profile} alt={"Me"} style={{ position: "absolute" }}/>
         <br/>
        <About/>
        <Projects/>
        <Blogs/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Contact/>
        <br/>
        <br/>
        <Icon/>
    </div>
  );
}

export default App;
