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
  
      emailjs.sendForm('service_fiv85bb', 'template_kk3bll9', e.target, 'user_nxAX5bsboFNtTwcx6luKA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    render(){
    return (
    
      <form className="contact-form" onSubmit={this.sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

  export default ContactMe