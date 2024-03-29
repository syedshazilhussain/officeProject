import React, { useEffect } from 'react'
import footer__logo from '../img/Oprify final-05.png'
import '../Footer/Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Footer'>
            <div className='footer__container'>
                <div className='footer__inner'>
                    <div className='footer__logo'>
                        <div className='footer__logo__box'>
                            <img height={100} src={footer__logo} alt="" />
                            <h3>OPERIFY</h3>
                        </div>
                        <div className='footer__content'>
                            <p>At Operify, we are dedicated to exceeding expectations. Choose us to experience IT and digital services at their peak.</p>
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
                        <h4>QUICK LINKS</h4>
                        <div className='fo0ter__underline'></div>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='/portal'><p>Portal</p></Link>
                        <Link to='/Services'><p>IT Services</p></Link>
                        <Link to='/portfolio'><p>Portfolio</p></Link>
                        <Link to='/aboutUs'><p>About Us</p></Link>
                    </div>
                    <div className='footer__logo3'>
                        <h4>CONTACT</h4>
                        <div className='fo0ter__underline'></div>
                        <div className='footer__contact'>
                            <p><i className="ri-phone-fill"></i>+44 20 3287 8213</p>
                            <p><i className="ri-phone-fill"></i>+1 657 549-4150</p>
                        </div>
                        <p>oprify.business@gmail.com</p>
                        <div className='footer__contact'>
                            <p><i className="ri-global-fill"></i>www.operify.com</p>
                        </div>
                    </div>
                    {/* <div className='footer__logo4'>
                        <h4>Join Our Mailing List</h4>
                        <div className='fo0ter__underline'></div>
                        <input type='email' placeholder='Enter your email' name="" id="" />
                        <button><i className="ri-arrow-right-line"></i></button>
                    </div> */}
                </div>
                <div className='footer__inner2'>
                    <h4>COPYRIGHT © 2024 Operify. All Rights Reserved.</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer