import React, { useEffect } from 'react'
import '../About__Company/AboutCompany.css'
import about2__img1 from '../../img/about2-img1.webp'
import about2__img2 from '../../video/make your website with us.mp4'
import about2__img3 from '../../img/about2-img3.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutCompany() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='about__campany'>
            <div className="about__campany__cantainer">
                <div className="about__campany__inner" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="50">
                    <div className='underline__box'>
                        <div className="underline"></div>
                        <h3>About Company</h3>
                    </div>
                    <h1>Explore Our It <span>Solution</span> Service And Boost Your Online Presence</h1>
                    <p>Delve into our array of services designed to enhance your online presence and empower your digital success. Choose Omnities and take the next step towards a brighter online future.</p>
                    <div className='Team'>
                        <div className='team__img__box'>
                            <img src={about2__img1} alt="" />
                        </div>
                        <div className='team__cantainer'>
                            <div className='team__content'>
                                <h4>Exclusive Design</h4>
                                <p>“Everything is designed. Few things are designed well.”</p>
                            </div>
                            <div className='team__content2'>
                                <h4>Professional Team</h4>
                                <p>“The technology you use impresses no one. The experience you create with it is everything.”</p>
                            </div>
                        </div>
                    </div>
                    <div className='skill__bars'>
                        <div className='bar'>
                            <div className='info'>
                                <span>It Services</span>
                            </div>
                            <div className='progress__line services'><span></span></div>
                        </div>
                        <div className='bar'>
                            <div className='info'>
                                <span>Technology</span>
                            </div>
                            <div className='progress__line technology'><span></span></div>
                        </div>
                    </div>
                </div>
                <div className="about__campany__inner2" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="50">
                    <div className='about__campany__right__img'>
                        <video className='about2__img2' autoPlay loop muted playsInline>
                            <source src={about2__img2} type='video/mp4' />
                        </video>
                        {/* <img className='about2__img3' src={about2__img3} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany