import React, { useState } from 'react'
import '../Intro/Intro.css'
import Carousal from './Carousal'
import { slider } from './images'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


function Intro() {
  const [slide, setSlide] = useState(0);

  const nextSlider = () => {
    setSlide(slide === slider.length - 1 ? 0 : slide + 1)
  }

  const prevSlider = () => {
    setSlide(slide === 0 ? slider.length - 1 : slide - 1)
  }
  return (
    <div className='intro__header'>
      {/* <Carousal data={slider}/> */}
      <div className='carousal'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlider} />
        {slider.map((item, idx) => {
          return (
            <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'} />
          )
        })}
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlider} />
        <span className='indicaters'>
          {slider.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicater' : 'indicater indicater-inactive'}></button>
          })}
        </span>
      </div>
    </div>
  )
}

export default Intro