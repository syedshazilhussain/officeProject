import React, { useEffect, useState } from 'react'
import '../Intro/Intro.css'
import Carousal from './Carousal'
import { slider } from './images'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import IMG1 from '../img/mountain1.png'
import IMG2 from '../img/mountain2.png'
import IMG3 from '../img/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology.jpg'


{/* <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:10"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:18"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:22"></span>
        <span style="--i:25"></span>
        <span style="--i:18"></span>
        <span style="--i:21"></span>
        <span style="--i:15"></span>
        <span style="--i:13"></span>
        <span style="--i:26"></span>
        <span style="--i:17"></span>
        <span style="--i:13"></span>
        <span style="--i:28"></span> */}

function Intro() {
  const [offsetY, setOffsetY] = useState();
  // const [slide, setSlide] = useState(0);

  // const nextSlider = () => {
  //   setSlide(slide === slider.length - 1 ? 0 : slide + 1)
  // }

  // const prevSlider = () => {
  //   setSlide(slide === 0 ? slider.length - 1 : slide - 1)
  // }

  // useEffect(() => {
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  // window.addEventListener('scroll', handleScroll);
  // return () => window.removeEventListener('scroll', handleScroll);
  // }, [])

  // const img = document.querySelector('intro__header img')
  //   window.addEventListener('scroll', () => {
  //     // console.log((window.screenY / 500) + 1)
  //     let value = (window.scrollY / 500) + 1
  //     // img.style.tranform = `scale(${value})`;
  //   })



  return (
    <div className='intro__header'>
      <div className='cantainer'></div>
      <div className='bubbles'>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
      </div>
      {/* <Carousal data={slider}/> */}
      {/* <div className='carousal'>
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
          </div> */}
      {/* <img src={IMG3} alt="" /> */}
      {/* <div className='zoom'> */}
      {/* <img src={IMG1} alt="" id='img1' style={{width: (100 + offsetY * 0.3) + "%"}} /> */}
      {/* <img src={IMG2} alt="" id='img2' style={{width: (100 + offsetY * 0.3) + "%"}}  /> */}
      {/* <img src={IMG3} alt="" id='img3' style={{top: `-${10 + offsetY +  0.9 + '%'}`}} /> */}
      {/* <h2 id='text' style={{ top: `-${5 + offsetY + 0.9 + '%'}` }}>Welcome to Operify</h2> */}
      {/* </div> */}
    </div>
  )
}

export default Intro