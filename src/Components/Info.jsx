import React from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

export default function Info() {
  return (
    // 2 ème partie de la carousel
    <div className='md:mb-10 mb-20'>
        <div className='flex flex-col-reverse md:flex-row px-5 md:px-28 gap-10 md:gap-3 h-250px] md:h-[450px]'>
            <div className='flex-1 h-[50px]'>
               <div className='md:mt-16'>
                    <h1 className='text-2xl md:text-4xl text-center pb-6 font-serif font-semibold'> Lorem ipsum dolor sit amet.</h1>
                    <p className='pX-3 text-xl md:text-2xl'>
                        Notre équipe est composée de professionnels de la santé expérimentés et dévoués, 
                        y compris des médecins, des infirmières et des techniciens. Nous travaillons
                        ensemble pour assurer les meilleurs résultats pour nos patients.
                    </p>
                    <Link to="/rendezVous"> 
                      <button className='text-lg text-white bg-green-500 py-1 px-10 mt-3 rounded-md
                        hover:bg-green-600'> 
                        prendre rendez-vous
                      </button>
                    </Link>
               </div>
            </div>
            <div className='flex-1 h-[50px]'>
               <div className='flex justify-center'>
                 {/* rendu du component carousel */}
                  <Slider/>
               </div>
            </div>
          
        </div>

    </div>
  )
}
