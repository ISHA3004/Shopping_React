import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contactbox">
      <div className="webinfo">
        <p>Address: E-602,Neptune Apartment,Malad(E),Mumbai-400097</p>
        <p>Email: ishamistry81@gmail.com</p>
        <p>Phone: 8108217847</p>
      </div>
      <div className="custinfo">
        <form>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="email" placeholder='Email Address'/>
            <input type="tel" placeholder='Mobile Number'/>
            <input type="textarea"  placeholder="Write your message here"/>
            <div>
            <button>Send</button>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default Contact
