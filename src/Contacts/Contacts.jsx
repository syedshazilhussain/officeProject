import React, { useRef } from 'react';
import '../Contacts/Contacts.css'
import ThreeScene from './ThreeScene'
import Navbar from '../Navbar/Navbar'
import emailjs from "@emailjs/browser"

function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nsfolso', 'template_hru9u63', form.current, {
                publicKey: 'chYIwEnJZDUDKCngA',
            })
            .then(
                (result) => {
                    console.log(result.text, 'SUCCESS!');
                },
                (error) => {
                    console.log(error.text ,'FAILED...');
                },
            );
    };
    return (
        <div className='Contacts'>
            <div className='main'>
                <input type="checkbox" id='chk' aria-hidden="true" />
                {/* <div class="visme_d" data-title="Contact us page" data-url="4d7d0zpq-contact-us-page?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="46362">
                <iframe src="" frameborder="0"></iframe>
            </div> */}
                {/* Add the Navbar component here if needed */}
                {/* <Navbar /> */}
                <div className='signup'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="" aria-hidden='true'>Contact Us</label>
                        <input type="text" name="user_name" placeholder='User name' required="" id="" />
                        <input type="number" name="phone_number" placeholder='Phone number' required="" id="" />
                        <input type="email" name="user_email" placeholder='Email' required="" id="" />
                        <label htmlFor="chk" className='btn'>
                            <button type='submit'>
                                Submit
                            </button>
                        </label>
                    </form>
                </div>
                <div className='login'>
                    <div>
                        <h1>Thank You</h1>
                        <p>Please check your email for instructions to access the webinar. We'll be emailing a replay to your email once the webinar is over. In the meantime, you can watch our previous webinars on our website here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
