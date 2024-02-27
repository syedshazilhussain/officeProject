import React from 'react'
import '../Services/Services.css'
import services__img from '../img/services__img.webp'
import { Link } from 'react-router-dom'
import services1 from '../img/services11.jpg'
import services2 from '../img/services2.avif'
import services3 from '../img/services3.webp'
import services4 from '../img/services44.webp'
import services5 from '../img/services55.jpg'
import services6 from '../img/services6.jpg'
import services7 from '../img/services7.png'
import services8 from '../img/services88.jpg'

function Services() {
    return (
        <div className='Services'>
            <div className='Services_img'>
                <img src={services__img} alt="" />
                <div className='Services__heading'>
                    <h1>Services</h1>
                    <div className='services__link'>
                        <h4>
                            <Link className='Link' to='/'>Home </Link>
                        </h4>
                        <span> > </span>
                        <h5> Services</h5>
                    </div>
                </div>
            </div>
            <div className='services__container'>
                <div className='services__inner'>
                    <h4>“Empowering Your Success Our Comprehensive Software Services”</h4>
                </div>
                <h1>IT Solutions</h1>
                <div className='services__card__container'>
                    <div className='cards'>
                        <img src={services1} alt="" />
                        <h3>System Administration</h3>
                        <p>Linux Administration , Vmware Vsphere , Vmware VS(Virtual San) , Windows Administration , Cloud..</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services2} alt="" />
                        <h3>Software Development</h3>
                        <p>Web Applications , Desktop Applications , Apis & Intergations , Software Testing , Code...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services3} alt="" />
                        <h3>Web Designing & Web Development</h3>
                        <p>  UI/UX Design , WordPress Designing , E-Commerce Websites , Blogs , Shopify ,...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services4} alt="" />
                        <h3>Graphic Designing</h3>
                        <p>Logo Design , Art & Illustraion , Visual Design , Marketing Design , Advertising...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services5} alt="" />
                        <h3>Translation Services</h3>
                        <p>English , German , Russian , Arabic , Spanish , Service Details We...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services6} alt="" />
                        <h3>Video Editing</h3>
                        <p>Animation , Stop motion , Mixed media , Screen recorded video , Animated demo...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services7} alt="" />
                        <h3>Sales & Customer Services</h3>
                        <p>Sales , Call Center And Calling , Customer Care , Interview Preparation , Life...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                    <div className='cards'>
                        <img src={services8} alt="" />
                        <h3>Content Writing</h3>
                        <p>Articles & Blog Posts , Website Content , Creative Writing , Research & Summarization...</p>
                        <p className='cards__link'><i className="ri-arrow-right-line"></i> Read More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services