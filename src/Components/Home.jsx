import React from 'react'
import Header from './Navbar/Header'
import Description from './Description'
import Info from './Info'
import Specialisation from './Specialisation'
import Footer from './Footer'
import Environnement from './Environnement'



export default function Home() {
    
  return (
    // la page principale du projet le rendu des components
    <div >
      
          <Header/>
          <Description/>
          <Info/>
          <Specialisation/>
          <Environnement/>
          <Footer/>
        
    </div>
  )
}
