// src/components/Contact.js
import React, { useState } from 'react';
import { client } from '../client';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await client.create({
        _type: 'contact',
        ...formData
      });
      
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions about our products or services? Fill out the form or use the contact information below.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Tech Street, Digital City</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@pabali.com</p>
            </div>
          </div>
          
          <div className="business-hours">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Saturday: 10AM - 4PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;