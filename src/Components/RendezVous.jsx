import React from 'react'
import Header from '../Components/Navbar/Header'

import Img3 from '../assets/vous2.jpg'
import Footer from './Footer'

export default function RendezVous() {
  return (
    // la page qui gère le rende-Vous
    <div>
      <Header/>

      <div className='m-10 shadow-xl rounded-lg'>
        <div className='flex py-5 px-5 gap-3'>
              <div className='md:flex-1 hidden md:block'>
                <img src={Img3} alt="" className='w-full h-[500px] object-cover rounded-xl'  />
              </div>

              <div className='md:flex-1 pt-16 '>
                <h1 className='text-center text-2xl md:text-4xl text-slate-900 font-mono'>
                   Prendre un Rendez-Vous 
                </h1>
                <form action="" className='m-0 md:m-5'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <input type="text" name="text" id="" placeholder='votre non' className='py-2 px-3
                        outline-none font-mono text-slate-900 text-lg border-b w-[300px] md:w-full
                        border-black bg-white' />
                      <input type="text" name="text" id="" placeholder='votre Prenom' className='py-2 px-3
                        outline-none font-mono text-slate-900 text-lg border-b w-[300px] md:w-full
                        border-black' />
                      <input type="tel" name="tel" id="" placeholder='votre numéro' className='py-2 px-3
                        outline-none font-mono text-slate-900 text-lg border-b w-[300px] md:w-full
                        border-black' />
                      <input type="date" name="date" id="" className='py-2 px-3
                        outline-none font-mono text-slate-900 text-lg border-b w-[300px] md:w-full
                        border-black' />
                  </div>

                    <ul className='flex md:flex-row flex-col py-7 gap-2 md:gap-4'>
                      <li className='text-lg'>
                        <input type="checkbox" name="" id="" /> ophtamologie
                      </li>
                      <li className='text-lg'>
                        <input type="checkbox" name="" id="" /> Dentiserie
                      </li>
                      <li className='text-lg'>
                        <input type="checkbox" name="" id="" /> Pédiatrie
                      </li>
                      <li className='text-lg'>
                        <input type="checkbox" name="" id="" /> Soins Généreaux
                      </li>
                    </ul>

                    <div>
                      <button className='text-xl bg-green-500 py-1 px-3 rounded-md text-slate-50 
                          font-mono hover:bg-green-600 hover:px-5'>
                          Soumettre                
                        </button>
                    </div>
                  
                </form>
              </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
