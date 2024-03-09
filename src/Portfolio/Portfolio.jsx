import React, { useState, useEffect } from 'react'
import '../Portfolio/Portfolio.css'
import { GalleryData } from './GalleryData'

function Portfolio() {
    const [data, setData] = useState([])
    const [collection, setCollection] = useState([])
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
        <div className='Portfolio'>
            <div className='buttons'>
                {/* <button>All</button>
                <button>UL/UX</button>
                <button>Design</button>
                <button>Art</button> */}
                <ul>
                    <li><button onClick={() => setData(GalleryData)}>All</button></li>
                    {
                        collection.map((item) => {
                            return (
                                <li><button onClick={() => { gallery__filter(item) }}>{item}</button></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='image-container'>
                {
                    data.map((item, index) => {
                        return (
                            // <div className='filter__img'>
                                <img key={index} src={item.img} />
                            // </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio