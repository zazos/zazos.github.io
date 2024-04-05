import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const Contact = () => {
    return (
        <section className='contact-wrap' id='Contact'>
            <div className='content'>
                <h1>Contact <span style={{ color: '#FF004F' }}></span> </h1>
                <p>Feel free to drop me an email to get in touch! Also, I'm available on  <a className='linked-in' href="https://www.linkedin.com/in/panagiotis-zazos-ba1a02188/" target="_blank" rel="noopener noreferrer">LinkedIn </a>- don't hesitate to send over a message if needed!</p>
                <a className="email" href="mailto:pzazos@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FF004F", marginRight: "5px" }} />
                    pzazos@hotmail.com
                </a>
            </div>
        </section>
    );
};
