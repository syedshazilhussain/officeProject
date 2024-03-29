import React, { useEffect } from 'react'
import '../Portfolio/Portfolio.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='Portfolio' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="50">
            <div className='Portfolio__cantainer'>
                <div className='portfolio__inner'>
                    <div className='portfolio__content'>
                        <h4>Portfolio</h4>
                        <h1>Our Latest Projects</h1>
                        <p>Our Achievements and Innovations Stand Shoulder-to-Shoulder with Global Digital Solutions.</p>
                        <div className='portfolio__link'>
                            <h6>To Expore All Projects :
                                <Link to='/portfolio'>
                                    <span> Click Here</span>
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='portfolio__inner'>
                    <div className='portfolio__content2'>
                        <div className='portfolio__link'>
                            <h6>To Expore All Projects : <span>Click Here</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio