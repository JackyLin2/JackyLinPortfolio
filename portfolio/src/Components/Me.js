import React from 'react'
import Profile from '../images/Profile.jpeg'

class Me extends React.Component{
    render(){
        return(
            <div className="project">
        <h1 className='Profile' style={{ fontSize: '200px' }}> Jacky Lin</h1> 
         <img  className='Profile' src={Profile} alt={"Me"} style={{ position: "absolute" }}/>
                
            </div>
        )
    }
}

export default Me