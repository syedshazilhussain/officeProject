import React from 'react'
import footer__logo from '../img/Oprify final-05.png'
import '../Footer/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer__container'>
                <div className='footer__inner'>
                    <div className='footer__logo'>
                        <div className='footer__logo__box'>
                            <img height={100} src={footer__logo} alt="" />
                            <h3>Operify</h3>
                        </div>
                        <div className='footer__content'>
                            <p>At Omnities, we are dedicated to exceeding expectations. Choose us to experience IT and digital services at their peak.</p>
                        </div>
                        <div className='footer__links'>
                            <div>
                                <i className="ri-facebook-fill"></i>
                            </div>
                            <div>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                    <div className='footer__logo2'>
                        <h4>Services</h4>
                        <div className='fo0ter__underline'></div>
                        <p>System Administrater</p>
                        <p>Software Development</p>
                        <p>WebDesigning & WebDevelopment</p>
                        <p>Graphic Designing</p>
                        <p>Content Writing</p>
                    </div>
                    <div className='footer__logo3'>
                        <h4>Contact</h4>
                        <div className='fo0ter__underline'></div>
                        <div className='footer__contact'>
                            <p><i className="ri-phone-fill"></i>+923322180971</p>
                        </div>
                        <p>info@omnities.com</p>
                        <div className='footer__contact'>
                            <p><i className="ri-global-fill"></i>www.omnities.com</p>
                        </div>
                    </div>
                    <div className='footer__logo4'>
                        <h4>Join Our Mailing List</h4>
                        <div className='fo0ter__underline'></div>
                        <input type='email' placeholder='Enter your email' name="" id="" />
                        <button><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                <div className='footer__inner2'>
                    <h4>COPYRIGHT © 2023. OMNI-TIES</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer