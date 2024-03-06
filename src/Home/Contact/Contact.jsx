import React from 'react'
import './Contact.css'
import bussiness__img from '../../img/bussiness.webp'

function Contacts() {
  return (
    <div className='contact' id='contact'>
      <div className='contact__cantainer'>
        <div className='contact__content'>
          <h4>Quote Company</h4>
          <h1>We Provide the best IT Solutions services</h1>
          <div className='inputs'>
            <input type="text" name="" placeholder='Name' id="" />
            <input type="text" name="" placeholder='Phone' id="" />
            <div className='item1'>
              <input type="text" name="" placeholder='Email' id="" />
              <div className='checkbox__item'>
                <div className='interested'>
                  <span>Interested</span>
                  <input className='checkbox' type="checkbox" name="" id="" />
                </div>
                <div className='interested'>
                  <span>Not interested</span>
                  <input className='checkbox' type="checkbox" name="" id="" />
                </div>
              </div>
            </div>  
            <textarea name="" id="" placeholder='Messages' cols="30" rows="10"></textarea>
            <div className='contacts'>
              <button className='contact__btn'>Submit Now</button>
            </div>
          </div>
        </div>
        <div className='contact__content2'>
          <img src={bussiness__img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contacts