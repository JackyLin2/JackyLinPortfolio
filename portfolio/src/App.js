import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Profile from './images/Profile.jpeg'
import Icon from './Components/icon'
import Me from './Components/Me'


function App() {
  return (
    <div >
      {/* <NavBar/> */}
     <Me/>
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
