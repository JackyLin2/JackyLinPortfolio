import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Projects from './Components/Projects'



function App() {
  return (
    <div >
      <NavBar/>
         <h1>Jacky Lin</h1> 
        <About/>
        <Projects/>
        <Blogs/>
        <Contact/>
    </div>
  );
}

export default App;
