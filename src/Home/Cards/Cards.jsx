import React from 'react'
import '../Cards/Cards.css'

function Cards() {
    return (
        <div className='main__cards__div'>
            <div className="card">
                <div className='text__cantainer'>
                    <h1>System Administration</h1>
                    <p>Linux Administration , Vmware Vsphere , Vmware VS(Virtual San) , Windows Administration , Cloud...</p>
                </div>
            </div>
            <div className="card">
                <div className='text__cantainer'>
                    <h1>Software Development</h1>
                    <p>Web Applications , Desktop Applications , Apis & Intergations , Software Testing , Code...</p>
                </div>
            </div>
            <div className="card">
                <div className='text__cantainer'>
                    <h1>Web Designing & Web Development</h1>
                    <p> UI/UX Design , WordPress Designing , E-Commerce Websites , Blogs , Shopify ,...</p>
                </div>
            </div>
            <div className="card">
                <div className='text__cantainer'>
                    <h1>Graphic Designing</h1>
                    <p>Logo Design , Art & Illustraion , Visual Design , Marketing Design , Advertising...</p>
                </div>
            </div>
        </div>
    )
}

export default Cards