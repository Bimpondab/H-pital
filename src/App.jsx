import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services';
import RendezVous from './Components/RendezVous';
import Contacts from './Components/Contacts';
import Appropos from './Components/Appropos';

function App() {

  return (
    // les routes pour chaque pages
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/services' element={ <Services/> } />
          <Route path='/rendezVous' element={ <RendezVous/> } />
          <Route path='/contacts' element={ <Contacts/> } />
          <Route path='/apropos' element={ <Appropos/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
