"use client"
import React, {useState} from 'react'


function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  })

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="contact__form">
      <div className="contact__head">Contact Us</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" id="fullname" placeholder='Fullname' onChange={handleChange} />
        <input type="email" name="email" id="email" placeholder='Email:' onChange={handleChange} />
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'onChange={handleChange} ></textarea>
        <button className='button__primary'>SUBMIT</button>
      </form>
    </div>
  )
}

export default ContactForm