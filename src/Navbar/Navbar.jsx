import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../img/Oprify final-04.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [openUl, setOpenUl] = useState(false)

    return (
        <div className="nav__header">
            <nav className="navbar">
                <div className="logo">
                    <img height={80} src={logo} alt="" />
                    <Link to='/' className='Links'>
                        <h1>Operify</h1>
                    </Link>
                </div>
                <div className={openUl ? 'website__links Mobile__menu__links' : 'website__links'}>
                    <ul className='website__ul'>
                        <Link className='Links' to="/">
                            <li>Home</li>
                        </Link>
                        <Link className='Links' to='/Portal'>
                            <li>Portal</li>
                        </Link>
                        <Link className='Links' to='/Services'>
                            <li>IT Services</li>
                        </Link>
                        <Link className='Links' to='/portfolio'>
                            <li>Portfolio</li>
                        </Link>
                        <Link className='Links' to='/aboutUs'>
                            <li>About Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='toggle' onClick={() => setOpenUl(!openUl)}>
                    <i className="ri-menu-line"></i>
                </div>
                {/* <Link to='https://forms.visme.co/formsPlayer/4d7d0zpq-contact-us-page'> */}
                <Link to='/contactus'>
                    {/* <a href="https://forms.visme.co/formsPlayer/q6p3opw9-contact-us"> */}
                        <div className='contact__btn'>
                            <button>Contact Us</button>
                        </div>
                    {/* </a> */}
                </Link>
            </nav>
        </div>
    )
}

export default Navbar