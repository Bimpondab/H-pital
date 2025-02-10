import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import ScrollBtn from './ScrollBtn';

export default function Footer() {
  return (
    <div className=''>
        <div className='h-[38vh] md:h-[45vh] rounded bg-black '>
            <div className='md:flex md:flex-row flex-col items-center justify-between md:px-20 pt-14'>
             
                <Link to='/'> <h1 className='text-center text-xl md:text-2xl font-semi-bold text-slate-300'>
                     <span className='text-green-500'>Hopital</span>.com</h1> 
                </Link>
                
                <ul className='flex justify-center pt-5 gap-1 md:gap-5 text-lg md:text-xl text-dark-500'>
                    <Link to='/'> <li className='hover:bg-green-500  text-slate-300 px-3 py- rounded-md'> Home </li> </Link>
                    <Link to='/services'> <li className='hover:bg-green-500  text-slate-300 px-3 py- rounded-md'> Services </li> </Link>
                    <Link to='/contacts'> <li className='hover:bg-green-500  text-slate-300 px-3 py- rounded-md'> Contacts </li> </Link>
                </ul>
                {/* hover:bg-green-500 */}
                
                <div className='flex hidden md:block'>
                    <Link to="/apropos"> 
                    <button className='text-lg text-slate-300 border py-1 px-5 mt-3 rounded-md
                         hover:text-emerald-300 hover:border hover:bg-transparent'> 
                        apropos 
                    </button>
                    </Link>
                </div>
            </div>

    {/* partie footer logo */}
            
            <div className=' flex flex-col items-center justify-center mt-6'>
                <Link>
                    <h1 className='text-green-500 text-center text-2xl'>Bimpondablaise2<span className='text-slate-300'>@</span>gmail.com</h1>
                </Link>
    {/* partie footer logo */}
                <div className='flex gap-4 mt-10'>
                    <Link to='/'>
                        <FaFacebookF className='text-4xl py-2 bg-slate-300 hover:bg-green-500
                            hover:text-white font-bold text-green-700 rounded-md transform transition
                            hover:scale-110  duration-100 '/>
                    </Link>
                    <Link to='/'>
                        <GrInstagram  className='text-4xl py-2 bg-slate-300 hover:bg-green-500
                            hover:text-white font-bold text-green-700 rounded-md transform transition
                              hover:scale-110  duration-100 '/>
                    </Link>
                    <Link to='/'>
                        <PiWhatsappLogoBold  className='text-4xl py-2 bg-slate-300 hover:bg-green-500
                            hover:text-white font-bold text-green-700 rounded-md transform transition
                            hover:scale-110  duration-100 '/>
                    </Link>
                    <Link to='/'>
                        <FaLinkedinIn className='text-4xl py-2 bg-slate-300 hover:bg-green-500
                            hover:text-white font-bold text-green-700 rounded-md transform transition
                            hover:scale-110  duration-100 '/>
                    </Link>
                       
                </div>
                <ScrollBtn/>
            </div>     
        </div>
        
    </div>
  )
}
