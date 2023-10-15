import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './Contact-us.css';

const Contact_us = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    
    fetch('https://moviesreactjs-b12ae-default-rtdb.firebaseio.com/contactData.json', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data submitted successfully!');
          // Clear the form after successful submission
          setName('');
          setEmail('');
          setPhone('');
        } else {
          console.error('Error submitting data to Firebase.');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  };

  return (
    <>
      <Header />
      <div className="contact-us-container">
        <div className="contact-us-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-us-name">
              Name:
              <input
                type="text"
                id="contact-us-name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={handleNameChange}
              />
            </label>
            <br />
            <label htmlFor="contact-us-email">
              Email:
              <input
                type="email"
                id="contact-us-email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <br />
            <label htmlFor="contact-us-phone">
              Phone:
              <input
                type="text"
                id="contact-us-phone"
                placeholder="Enter your Phone"
                required
                value={phone}
                onChange={handlePhoneChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact_us;
