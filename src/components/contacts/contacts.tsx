// pages/contacts.js
'use client'
import React from "react";
import Link from "next/link";
import './contact.css';

const Contacts = () => {
  return (
    <div className="container-contact">
      <h1 className="title">Contact Us</h1>
      <div className="contact-block">
        <div className="contact-details">
          <p><strong>Address:</strong> Osh, Amir-Timur Street, 101 home 14</p>
          <p><strong>Phone:</strong> +996998559855</p>
          <p><strong>Email:</strong> <a href="mailto:shohruh@alatoo-moto.com" className="email-link">shohruh@alatoo-moto.com</a></p>
          <p><strong>Working Hours:</strong></p>
          <ul className="working-hours">
            <li>Monday – Friday: 09:30 – 18:00</li>
            <li>Saturday: 09:30 – 12:00</li>
          </ul>
        </div>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.7344843724995!2d72.82933907451739!3d40.50325405037112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdae5eeedb3821%3A0x32098a58403b8c91!2sAla-TooMoto%20NatureTravel%20Eng%20Company!5e0!3m2!1sru!2skg!4v1737976920627!5m2!1sru!2skg"
            className="iframe-map" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
     
    </div>
  );
};

export default Contacts;
