import React from 'react'
import './Contact.css'
import { useState } from 'react'

const Contact = () => {
    
  const [details,setDetails] = useState({fname:"",lname:"",email:"",telnum:"",mess:""});

 
  const handleSend = (e)=>{

   e.preventDefault();
      console.log(details);
    fetch("http://localhost:5000/post",{
       "method":"POST",
       "headers":{
         "Accept":"*/*",
         "Content-Type":"application/json"
       },
       "body":JSON.stringify(details)
     }).then(res=> res.json()).then(data => {if(data.status === 'ok'){alert("Details saved successffully")}}).catch(err => {console.log(err)})
  }
  return (
    <div className="contactbox">
      <div className="webinfo">
        <p>Address: E-602,Neptune Apartment,Malad(E),Mumbai-400097</p>
        <p>Email: ishamistry81@gmail.com</p>
        <p>Phone: 8108217847</p>
      </div>
      <div className="custinfo">
        <form>
            <input type="text" placeholder='First Name' name="fname" onChange={(e)=>{setDetails({...details,fname:e.target.value})}}/>
            <input type="text" placeholder='Last Name' name="lname" onChange={(e)=>{setDetails({...details,lname:e.target.value})}}/>
            <input type="email" placeholder='Email Address' name='email'onChange={(e)=>{setDetails({...details,email:e.target.value})}}/>
            <input type="tel" placeholder='Mobile Number' name="telnum" onChange={(e)=>{setDetails({...details,telnum:e.target.value})}}/>
            <input type="textarea"  placeholder="Write your message here" onChange={(e)=>{setDetails({...details,mess:e.target.value})}}/>
            <div>
            <input type="submit" onClick={handleSend} value="Send"/>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default Contact
