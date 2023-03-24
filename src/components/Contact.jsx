import React from 'react';
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [subject,setSubject] = useState();
  const [nameError,setNameError] = useState("")
  const [emailError,setEmailError] =useState("")
  const [messageError,setMessageError]=useState("")
  const [subjectError,setSubjectError] =useState("")

  function handleClick(e){
    e.preventDefault();
    if(name.length <=3){
      setNameError("Enter a Valid Name")
    }
   
    if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
      setEmailError("Enter valid Email")
    }
    if(subject.length<=4){
      setSubjectError("Enter a valid Subject")
    }
    if(message.split(" ").length<=4){
      setMessageError("Enter a good a Message at least 5 words")
    }

  }


  return (
    <section id="contact">
<div className='container mb-5'>
              <div class="section-title">
          <h2>Contact</h2>
          <p>Please free to reach out me </p>
        </div>

    <div className="row">
      <div className="col-lg-5">
        <div className="info">
          <div className="address">
          <i class="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>Bengaluru,India</p>
          </div>
          <div className="phone">
          <i class="bi bi-phone"></i>
          <h4>Phone:</h4>
          <p>7873033317</p>
          </div>
          <div className="email">
          <i class="bi bi-envelope"></i>
          <h4>Email:</h4>
          <p>amruamrutansu@gamil.com</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865403854!2d77.4908520976513!3d12.953959986824177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679603877940!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div className="col-lg-7 d-flex align-items-strech">
      <div className='contact-form'>
        <div className="contact-form-title">
          <p className='text-center my-lg-2 pb-4'>Drop A Message for Me</p>
        </div>
        
            <form onSubmit={handleClick}>
                <div className="row">
                  <div className="col-lg-6">
                  <div className="form-group">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" onFocus={()=>setNameError("")} onChange={(e)=>setName(e.target.value)} id="" className="form-control" required/>
                  {nameError?<div className='text-danger'>{nameError}</div>:""}
                </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                  <label for="email">Your Email</label>
                  <input type="email" name="email" onFocus={()=>setEmailError("")}  onChange={(e)=>setEmail(e.target.value)} id="" className="form-control" required/>
                  {emailError?<div className='text-danger'>{emailError}</div>:""}
                </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" name="subject" onFocus={()=>setSubjectError("")} onChange={(e)=>setSubject(e.target.value)} id="" className="form-control"  required/>
                  {subjectError?<div className='text-danger'>{subjectError}</div>:""}
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea name="message" onFocus={()=>setMessageError("")} onChange={(e)=>setMessage(e.target.value)} id="" className='form-control' cols="30" rows="5" placeholder=''></textarea>
                  {messageError?<div className='text-danger'>{messageError}</div>:""}
                </div>
                
                <div class="text-center"><button type="submit" className='mt-3 btn btn-submit'>Send Message</button></div>
            </form>
        </div>   
      </div>
    </div>

             
    </div>
    </section>
  )
}

export default Contact