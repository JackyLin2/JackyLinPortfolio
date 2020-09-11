import React from 'react'
import emailjs from 'emailjs-com';



 class ContactMe extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ' ',
            email: '',
            message: ''
        }
    }

    sendEmail = (e) =>  {
      e.preventDefault();
      emailjs.sendForm('service_xnro0bb', 'template_tstruct' , e.target, 'user_nxAX5bsboFNtTwcx6luKA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    }


    
    render(){
            console.log(this.state.email)
    return (
        <div>
        <h1>Contact Me:</h1>
      <form className="contact-form" onSubmit={this.sendEmail}>
        <label>Name: </label>
        <input type="text" name="name" placeholder="Your Name"/><br/>
        <label>Email: </label>
        <input type="email" name= "email"  placeholder="Your Email"/><br/>
        <label>Message: </label>
        <textarea name="message" placeholder="Your Message Here"/>
        <input type="submit" value="Send" />
      </form>
      </div>
    );
  }
}

  export default ContactMe