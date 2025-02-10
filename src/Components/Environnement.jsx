import React from 'react'
import Img1 from '../assets/vous4.jpg'
import Img2 from '../assets/vous2.jpg'
import Img3 from '../assets/vous6.jpg'

import { motion} from 'framer-motion'

export default function Environnement() {
    
  return (
    // 4 ème partie environnement d'accueil
    <div>
        <div className='pb-16'>
      
            
            <h1 className='text-center text-4xl text-red-500 font-serif italic mb-10'> 
                Nous somme prèt de vous recevoir dans de meilleur <br/> condition que nous disposons 
            </h1>
            <motion.div
                initial={{opacity:3, scale:0}}
                whileInView={{opacity:1, scale:1}}
                transition={{
                    duration:3
                }} className='flex justify-center px-5 gap-2 md:gap-5'>
                    <img src={Img1} alt="" className='h-[150px] md:h-[300px] w-[200px] md:w-[320px] rounded-full object-cover'/>
                    <img src={Img2} alt="" className='h-[150px] md:h-[300px] w-[200px] md:w-[320px] rounded-full object-cover'/>
                    <img src={Img3} alt="" className='h-[150px] md:h-[300px] w-[200px] md:w-[320px] rounded-full object-cover'/>
            </motion.div>

            <h1 className='text-center text-4xl text-slate-500 pt-16'> Engagement envers la Communauté </h1>
            <p className='text-center px-5 pt-6 text-slate-900 text-xl'>
                Nous croyons en l'importance de la santé communautaire. L'Hôpital [Nom de l'Hôpital] 
                s'engage à offrir des programmes de sensibilisation et des services de santé accessibles à tous.
            </p>
        </div>
    </div>
  )
}
