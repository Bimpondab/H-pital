import React from 'react'
import Header from '../Components/Navbar/Header'
import Footer from './Footer';

export default function Contacts() {
  return (
    <div>
      <Header/>

      <div className='bg-slate-200 h-screen'>
        <h1 className='text-3xl md:text-4xl text-slate-900 font-mono text-center pt-8'> Contactez-nous </h1>
        <p className='text-xl md:text-2xl px-2 text-center text-slate-800 py-4 font-sans'>
            Pour plus d'informations sur nos services, n'hésitez pas à nous contacter. Votre santé est 
            notre priorité, et nous sommes là pour vous accompagner à chaque étape de votre parcours 
            de soins.
        </p>
        <div className='flex md:flex-row flex-col px-5 md:px-24 gap-2 md:gap-5 pt-5 h-[300px] md:h-[400px] w-[420px] md:w-auto'>
          <div className='mdflex-1 h-[400px] shadow-md bg-slate-100 rounded-md px-2 md:px-6'>

            <h3 className='text-xl md:text-2xl pt-1 md:pt-3 pb-1 text-slate-900 font-mono'> Numéro de téléphone:</h3>
            <div className='bg-green-500 hover:bg-green-600 cursor-pointer text-white text-lg py-1 md:py-3 px-1 md:px-3 w-[165px] md:w-[200px] rounded-md'>
              <p className='text-xl'>+243 896309012</p>
            </div>

            <h3 className='text-2xl pt-1 md:pt-3 pb-1 text-slate-900 font-mono'> Numéro d'urgence:</h3>
            <div className='bg-green-500 hover:bg-green-600 cursor-pointer text-white text-lg py-1 md:py-3 px-1 md:px-3 w-[165px] md:w-[200px] rounded-md'>
              <p className='text-xl'>+243 896309012</p>
            </div>

            <div className='pt-2 py-2'>
              <h3 className='text-xl md:text-2xl text-slate-900 font-mono'> Adresse physique:</h3>
              <div className='bg-green-500 hover:bg-green-600 cursor-pointer grid grid-cols-2 text-white
                px-3 py-1 md:py-4 rounded-md'>
                <p className='text-lg md:text-xl '>.Avenue : 14bs, Matuba</p>
                <p className='text-lg md:text-xl '>.Quartier : Muana-ntunu</p>
                <p className='text-lg md:text-xl '>.Commune : de Selembao</p>
                <p className='text-lg md:text-xl '>.Commune : de Selembao</p>
              </div>
            </div>
            
          </div>

          <div className='md:flex-1 h-[400px] shadow-md bg-slate-100 rounded-md px-2 md:px-6'>
            <h2 className='text-xl md:text-2xl pt-3 pb-1 text-slate-900 font-mono'>
               faites nous parvenir votre message. 
            </h2>
            <form action="" className='flex flex-col'>
              <label htmlFor="" className='text-slate-900 text-xl py-2 font-sans'>
                Entrer votre nom complet :
              </label>
              <input type="text" name="text" id="" className='py-1 md:py-2 px-3 w-[360px] md:w-[400px] outline-none rounded-md
               font-mono text-slate-900 text-lg border border-black'/>

              <label htmlFor="" className='text-slate-900 text-xl py-1 md:py-2 font-sans'> </label>
              
              <textarea placeholder=' Entrer votre message :' name="" id="" cols="30" className='w-[360px] md:w-[400px] h-[100px] md:h-[130px] outline-none font-mono 
                text-slate-900 text-lg border border-black rounded-md px-2 py-1 '/>

              <div className='mt-3 pl-[67%] md:pl-[60%] pb-3'>
                <button className='text-xl bg-green-500 py-1 px-2 rounded-md text-slate-50 
                 font-mono hover:bg-green-600'>
                  Soumettre                
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
 
    </div>
  )
}
