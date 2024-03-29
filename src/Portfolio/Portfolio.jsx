import React, { useState, useEffect } from 'react'
import '../Portfolio/Portfolio.css'
import { GalleryData } from './GalleryData'
import { Link } from 'react-router-dom';
import portfolio__video from '../video/pexels-video-18069701-primary-w1280-h720.mp4'

function Portfolio() {
    const [data, setData] = useState([])
    const [collection, setCollection] = useState([]);
    // const button = document.querySelectorAll('button')
    // const gallery = document.querySelectorAll('img')

    // button.forEach((buttons) => {
    //     buttons.addEventListener('click', () => {
    //         for(let img of gallery) {
    //             img.style.display = 'none';
    //             const images = img.setAttribute("data-filter");
    //             if(buttons.textContent === images || buttons.textContent === 'All') {
    //                 img.style.display = 'block';
    //             }
    //         }
    //     })
    // })
    useEffect(() => {
        setData(GalleryData)
        setCollection([... new Set(GalleryData.map((item) => item.tittl))]);
    }, [])

    const gallery__filter = (itemData) => {
        const filterData = GalleryData.filter((item) => item.tittl === itemData);
        setData(filterData);
    }

    return (
        <>
            <video autoPlay loop muted playsInline>
                <source src={portfolio__video} type='video/mp4' />
            </video>
            <div className='Portfolio'>
                <div className='image-container'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link to={item.link}>
                                    <img key={index} src={item.img} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Portfolio