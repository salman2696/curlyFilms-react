import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactSection(){

    return(
        <>
        <div className="contact-section" id="contactUs">
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Address</p>
            <p><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;AMU Campus, Aligarh</p>
            <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+91-9084238633</p>
            <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;info@thecurlyfilms.com</p>
        </div>
        <div className="form-container">
            <form action="#">
                <div className="input-box">
                    <p>Name</p>
                    <input className="input" type="text"/>
                </div>
                <div className="input-box">
                    <p>Email</p>
                    <input className="input" type="email"/>
                </div>
                <div className="input-box">
                    <p>Message</p>
                    <input className="input" type="text"/>
                </div>
                <div className="input-box">
                    <input type="checkbox"/>
                    <label>I like it!</label>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
        </>
    )
}

export default ContactSection