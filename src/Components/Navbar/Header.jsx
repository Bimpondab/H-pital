import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll } from "motion/react"

import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export default function Header() {
 
// gère la barre de navigation
  const [isActive, setIsActive] = useState(false)

  return (
    // enête de la page navbar
    <>
    
          <nav className='px-10 py-6 shadow-md font-mono'>
              <div className='flex items-center justify-between'>
          
                  <Link to='/'> <h1 className='text-2xl font-semi-bold text-red-500'> Hopital.com </h1> </Link>
                     
                      <div className='md:block hidden'>
                         <div className=' flex items-center justify-between '>
                            <ul className='flex gap-2 text-lg text-dark-500'>
                                  <Link to='/'> <li className='hover:bg-green-500 hover:text-white px-3 py- rounded-md'> Home </li> </Link>
                                  <Link to='/services'> <li className='hover:bg-green-500 hover:text-white px-3 py- rounded-md'> Services </li> </Link>
                                  <Link to='/contacts'> <li className='hover:bg-green-500 hover:text-white px-3 py- rounded-md'> Contacts </li> </Link>
                            </ul>
                            <div className=''>
                               <Link to='/rendezVous' 
                                className='text-xl border shadow-sm px-5 py-1 rounded text-red-500 
                                   hover:text-green-500 '> 
                                <button> Rendez-Vous </button>
                              </Link>
                              
                            </div>  
                         </div>
                      </div>

                {/* nos icons pour activer ou désactiver */}
                    <span className={`${isActive ? 'hidden' : 'block'} md:hidden `}
                    onClick={() => setIsActive(true)}> <IoMenu className='text-3xl text-slate-900' /> </span>

                    <span className={`${isActive ? 'block' : 'hidden'} md:hidden `}
                    onClick={() => setIsActive(false)}> <VscChromeClose className='text-3xl text-slate-900' /> </span>                

              </div>

          {/* lorsqu'on active */}
              {
                  isActive && (
                    <div className='md:hidden flex-col'>
                      <ul className='flex flex-col gap-1 py-3 text-lg text-dark-500'>
                          <Link to='/'> <li className='hover:text-green-600 px-3 py- rounded-md'> Home </li> </Link>
                          <Link to='/services'> <li className='hover:text-green-600 px-3 py- rounded-md'> Services </li> </Link>
                          <Link to='/contacts'> <li className='hover:text-green-600 px-3 py- rounded-md'> Contacts </li> </Link>
                      </ul>
                      <div className=''>
                        <Link to='/rendezVous' 
                          className='text-xl border shadow-sm px-5 py-1 rounde text-green-500 '> 
                          <button> Rendez-Vous </button>
                        </Link>
                              
                      </div> 
                    </div>
                  )
              }

          </nav>
      
    </>
  )
}
