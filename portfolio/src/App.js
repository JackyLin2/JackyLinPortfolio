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
         <h1 className='Profile'> Jacky Lin</h1> 
         <img  className='Profile' src={Profile} alt={"Me"} style={{ position: "absolute" }}/>
         <br/>
        <About/>
        <Projects/>
        <Blogs/>
        <Contact/>
        <br/>
        <br/>
        <a href= "https://github.com/JackyLin2" > <AiFillGithub style={{
        position: 'absolute', left: '47%', top: '325%', fontSize: '30px'}}/> </a> 
        <a href="https://www.linkedin.com/in/jacky-lin-b6b0b5170/"><AiFillLinkedin style={{
        position: 'absolute', left: '50%', top: '325%',fontSize: '30px' }}  /> </a> 
        <a href="https://medium.com/@jacky.jia.lin"><AiFillMediumSquare  style={{
        position: 'absolute', left: '52.5%', top: '325%', fontSize:'30px'}}/> </a>
        
    </div>
  );
}

export default App;
