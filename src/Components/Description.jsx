import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../assets/doct1.jpg'
export default function Description() {
  return (
    <div className='mb-10 bg-black md:'>
        <div className='relative bg-black'>
            <img src={Img1} alt=""  className='bg-no-repeat bg-fixed object-cover h-[600px] w-full opacity-65'/>            
        </div>

        <div className='absolute top-64 md:top-[250px] font-mono pl-0 md:pl-[450px] pr-2'>
            <h1 className=' pb-2 md:pb-5 pl-4 text-3xl md:text-5xl text-white animate-bounce'> Bienvenue à Nom de l'Hôpital</h1>
            <p className='text-xl pl-4 md:text-2xl text-white md:text-center'> À l'Hôpital <span className='text-green-300'> [Nom de l'Hôpital], </span> notre mission est de fournir des soins de santé de 
              qualité supérieure à notre communauté. Nous sommes un établissement médical moderne, 
              dédié à la santé et au bien-être de nos patients.
            </p>
            <div className='flex justify-center'>
              <Link to="/apropos"> 
                <button className='text-lg text-white bg-green-500 py-1 px-5 mt-3 rounded-md
                 hover:text-emerald-300 hover:text-xl hover:border hover:bg-transparent'> 
                  apropos 
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}
