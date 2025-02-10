import React from 'react'
import Img1 from '../assets/doct8.jpg'
import Img2 from '../assets/vous1.jpg'
import Img3 from '../assets/doct1.jpg'
import Img5 from '../assets/doct2.jpg'
import Environnement from './Environnement'

export default function Specialisation() {
  return (
    // 3 ème partie après le carousel grid des medecins  
    <div className='rounded background mb-5 md:mb-10'>
        <div className='grid md:gap-4 gap-5 grid-cols-3 py-20 px-10'>
            <div>
                <div>
                    <img src={Img1} alt="" className='h-[150px] md:h-[200px] w-[250px] md:w-[350px] object-cover rounded-md'/>
                    <h1 className="text-center text-lg md:text-2xl text-white"> Churigienne </h1>
                </div>
            </div>
             
            <div>
                 <div>
                    <img src={Img2} alt="" className='h-[150px] md:h-[200px] w-[250px] md:w-[350px] object-cover rounded-md'/>
                    <h1 className="text-center text-lg md:text-2xl text-white"> dentiste </h1>
                </div>
            </div>

            <div>
                <div>
                    <img src={Img3} alt="" className='h-[150px] md:h-[200px] w-[250px] md:w-[350px] object-cover rounded-md'/>
                    <h1 className="text-center text-lg md:text-2xl text-white"> Churigienne </h1>
                </div>
            </div>
            <div>
                <div>
                    <img src={Img5} alt="" className='h-[150px] md:h-[200px] w-[250px] md:w-[350px] object-cover rounded-md'/>
                    <h1 className="text-center text-lg md:text-2xl text-white"> ophtamologue </h1>
                </div>
            </div>
            <div>
                <div>
                    <img src={Img3} alt="" className='h-[150px] md:h-[200px] w-[250px] md:w-[350px] object-cover rounded-md'/>
                    <h1 className="text-center text-lg md:text-2xl text-white"> Churigienne </h1>
                </div>
            </div>
            <div>
                <div>
                    <img src={Img3} alt="" className='h-[150px] md:h-[200px] w-[250px] md:w-[350px] object-cover rounded-md'/>
                    <h1 className="text-center text-lg md:text-2xl text-white"> Ginecologiz </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
