import React, {useState} from 'react'
import '../Intro/Carousal.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

function Carousal() {
    // const [slide, setSlide] = useState(0);

    // const nextSlider = () => {
    //     setSlide(slide === data.length - 1 ? 0 : slide + 1)
    // }

    // const prevSlider = () => {
    //     setSlide(slide === 0 ? data.length - 1 : slide - 1)
    // }
  return (
    <></>
    // <div className='carousal'>
    //     <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlider}/>
    //     {data.map((item, idx) => {
    //         return (
    //             <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'} />
    //         )
    //     })}
    //     <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlider}/>
    //     <span className='indicaters'>
    //         {data.map((_, idx) => {
    //             return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicater' : 'indicater indicater-inactive'}></button>
    //         })}
    //     </span>
    // </div>
  )
}

export default Carousal