// pages/Contact.js
import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
        <div className="box">
            <h1 className="title">Contact Us!</h1>
                <form className="signin-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="subject" id="subject" name="subject" placeholder="Subject."/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="message" id="message" name="message" placeholder="Message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;
