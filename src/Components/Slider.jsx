import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Img1 from '../assets/doct8.jpg'
import Img2 from '../assets/doct2.jpg'
import Img3 from '../assets/doct1.jpg'
import Img5 from '../assets/doct5.jpg'

export default function Slider() {
// gui gère le carousel
    const data = [
        {
            id:1,
            img: Img1,
        },
        {
            id:2,
            img: Img2,
        },
        {
            id:3,
            img: Img3,
        },
        {
            id:4,
            img: Img5,
        }
    ]
  return (
    <Carousel className='md:w-[85%] '
        autoPlay 
        infiniteLoop
        
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
    >

        {
            data.map((slide) => (
                <div key={slide.id} className=''>
                    <img src={slide.img} alt="" className='h-[350px] md:h-[400px] rounded-full'/>
                </div>
            ))
        }

    </Carousel>

  )
}
