import Header from '../Components/Navbar/Header'
import Footer from './Footer'

import Img1 from '../assets/doct8.jpg'
import Img2 from '../assets/doct2.jpg'
import Img3 from '../assets/doct1.jpg'

export default function Services() {
 
  return (
    <div>
      <Header/>

      <div className=''>
        <h1 className="text-center text-2xl md:text-4xl py-10 text-slate-900 animate-pulse ">
           Nous offrons une large gamme de services médicaux, y compris ; 
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 px-5 md:px-10 py-5 '>

          <div className='flex shadow-md shadow-slate-400 hover:shadow-xl hover:shadow-slate-500
           rounded w-[100%] h-[290px] md:h-[300px] cursor-pointer'>
            <img src={Img1} alt="" className='h-[290px] md:h-[300px] w-[160px] md:w-[300px] py-3 px-3'/>
            <div className='py-10'>
              <h1 className='md:text-3xl text-2xl text-slate-450'> Urgences 24/7 : </h1>
              <p className='pt-2 md:text-lg text-md'> 
                Des soins immédiats pour les situations critiques.
              </p>
            </div>
          </div>

          <div className='flex shadow-md shadow-slate-400 hover:shadow-xl hover:shadow-slate-500
           rounded w-[100%] h-[290px] md:h-[300px] cursor-pointer'>
            <img src={Img1} alt="" className='h-[290px] md:h-[300px] w-[160px] md:w-[300px] py-3 px-3'/>
            <div className='py-10'>
              <h1 className='md:text-3xl text-2xl text-slate-450'> Consultations Spécialisées : </h1>
              <p className='pt-2 md:text-lg text-md'> 
                Accès à des médecins spécialisés dans divers domaines, tels que la cardiologie, 
                la pédiatrie, la chirurgie orthopédique, et bien d'autres. 
              </p>
            </div>
          </div>

          <div className='flex shadow-md shadow-slate-400 hover:shadow-xl hover:shadow-slate-500
           rounded w-[100%] h-[290px] md:h-[300px] cursor-pointer'>
            <img src={Img1} alt="" className='h-[290px] md:h-[300px] w-[160px] md:w-[300px] py-3 px-3'/>
            <div className='py-10'>
              <h1 className='md:text-3xl text-2xl text-slate-450'> Soins Hospitaliers :  </h1>
              <p className='pt-2 md:text-lg text-md'> 
                Des chambres confortables et des soins attentifs pour nos patients hospitalisés, et bien d'autres. 
              </p>
            </div>
          </div>

          <div className='flex shadow-md shadow-slate-400 hover:shadow-xl hover:shadow-slate-500
           rounded w-[100%] h-[290px] md:h-[300px] cursor-pointer'>
            <img src={Img1} alt="" className='h-[290px] md:h-[300px] w-[160px] md:w-[300px] py-3 px-3'/>
            <div className='py-10'>
              <h1 className='md:text-3xl text-2xl text-slate-450'> Médecine Préventive : </h1>
              <p className='pt-2 md:text-lg text-md'> 
                Programmes de vaccination, dépistage et conseils pour promouvoir une vie saine. 
              </p>
            </div>
          </div>

          <div className='flex shadow-md shadow-slate-400 hover:shadow-xl hover:shadow-slate-500
           rounded w-[100%] h-[290px] md:h-[300px] cursor-pointer'>
            <img src={Img1} alt="" className='h-[290px] md:h-[300px] w-[160px] md:w-[300px] py-3 px-3'/>
            <div className='py-10'>
              <h1 className='md:text-3xl text-2xl text-slate-450'> Réhabilitation et Soins à Domicile :  </h1>
              <p className='pt-2 md:text-lg text-md'> 
                Soutien continu pour aider nos patients à se rétablir et à retrouver leur autonomie.
              </p>
            </div>
          </div>

          <div className='flex shadow-md shadow-slate-400 hover:shadow-xl hover:shadow-slate-500
           rounded w-[100%] h-[290px] md:h-[300px] cursor-pointer'>
            <img src={Img1} alt="" className='h-[290px] md:h-[300px] w-[160px] md:w-[300px] py-3 px-3'/>
            <div className='py-10'>
              <h1 className='md:text-3xl text-2xl text-slate-450'> Urgences 24/7 : </h1>
              <p className='pt-2 md:text-lg text-md'> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, distinctio. Aliquam magni nostrum deserunt excepturi asperiores, nam nulla 
                repellat commodi. 
              </p>
            </div>
          </div>

        </div>

      </div>

      <Footer/>
    </div>
  )
}
