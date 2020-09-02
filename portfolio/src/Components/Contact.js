import React from 'react'
import ContactMe from './ContactMe'


class Contact extends React.Component{
    
    handleClick = () => {
        console.log("hello")
    }

    render(){

        return(
            <div className="Form" >
                <ContactMe/>
                {/* Contact me: 
                <form>
                    <label>
                        Name: 
                        <input
                            name='name'
                            placeholder="Name"
                            type="text"
                        /><br/>
                        Enter Email: 
                        <input
                            name='email'
                            placeholder='Email'
                            type='text'
                        /><br/>
                        Message: 
                        <textarea
                            name='message'
                            type='textarea'
                            placeholder='Your Message'
                            cols={40} 
                            rows={10}
                        />
                    </label>
                </form>
               <input 
               onClick = {this.handleClick}
                type='submit'
                value='Submit'
               /> */}

              
            </div>
        )
    }
}

export default Contact 