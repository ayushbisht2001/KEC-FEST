import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
// import { ThemeContext } from '../../context';

function Contact() {

    const [done, setDone] = useState(false);
    const formRef = useRef()

    // const theme = useContext(ThemeContext)
    // const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_0iwd0dp', 'template_2bky28o', formRef.current, 'n9e4WIe3W2qTXKl6X')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                setTimeout(() => {
                    setDone(false)
                }, 2000);
                console.log(formRef);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c' >
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss about Kaivalya</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={`${process.env.PUBLIC_URL}/image/phone.png`} alt="" className="c-icon" />
                            +91 5966-244250
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={`${process.env.PUBLIC_URL}/image/email.png`} alt="" className="c-icon" />
                            director@kecua.ac.in
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={`${process.env.PUBLIC_URL}/image/address.png`} alt="" className="c-icon" />
                            BTKIT, Dwarahat
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your Query?</b> Always avilable for your query about the Kaivalya Fest, if the right query comes along to us.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" name='user_name' placeholder='Name' required />
                        <input type="text" name='user_subject' placeholder='Subject' required />
                        <input type="text" name='user_email' placeholder='Email' required />
                        <textarea name="message"
                            placeholder='Message...'
                            rows="5"  ></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

// style={{ resize: 'none' }}

// style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }}
// style = {{ backgroundColor: darkMode && "#333", color: darkMode && "white" }}
// style = {{ backgroundColor: darkMode && "#333", color: darkMode && "white" }}
// style = {{ backgroundColor: darkMode && "#333", color: darkMode && "white" }}