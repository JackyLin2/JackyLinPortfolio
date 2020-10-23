import React from 'react'
import ContactMe from './ContactMe'


class Contact extends React.Component{
    
    handleClick = () => {
        console.log("hello")
    }

    render(){

        return(
            <div className="Form" >
                <br/>
                <ContactMe/>
              
            </div>
        )
    }
}

export default Contact 