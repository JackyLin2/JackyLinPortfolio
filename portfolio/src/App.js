import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Profile from './images/Profile.jpeg'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumSquare} from "react-icons/ai"



function App() {
  return (
    <div >
      <NavBar/>
         <h1>Jacky Lin</h1> 
         <img  className='Profile' src={Profile} alt={"Me"}/>
        <About/>
        <Projects/>
        <Blogs/>
        <Contact/>
        <a href= "https://github.com/JackyLin2" > <AiFillGithub className='links' /> </a> |
        <a href="https://www.linkedin.com/in/jacky-lin-b6b0b5170/"><AiFillLinkedin  className='links'/> </a> |
        <a href="https://medium.com/@jacky.jia.lin"><AiFillMediumSquare  className='links'/> </a>
        
    </div>
  );
}

export default App;
