import React from "react"
import ContactBox from "../components/ContactBox"
import "../components/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <h1 id="contactheading">How can I help?</h1>
            <br />
            <ContactBox />

        </div>
    );
};

export default Contact;