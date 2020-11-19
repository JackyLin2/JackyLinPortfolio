import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumSquare} from "react-icons/ai"

class icon extends React.Component{
    render(){
        return(
            <div className="icon">
            <a href= "https://github.com/JackyLin2" > <AiFillGithub style={{
                position: 'absolute', left: '47%', top: '325%', fontSize: '30px'}}/> </a> 
                <a href="https://www.linkedin.com/in/jacky-lin-b6b0b5170/"><AiFillLinkedin style={{
                position: 'absolute', left: '50%', top: '325%',fontSize: '30px' }}  /> </a> 
                <a href="https://medium.com/@jacky.jia.lin"><AiFillMediumSquare  style={{
                position: 'absolute', left: '52.5%', top: '325%', fontSize:'30px'}}/> </a>
                
                </div>
        )
    }
}

export default icon