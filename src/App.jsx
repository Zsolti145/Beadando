import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Navbar from './assets/Navbar.jsx'
import Infocard from './assets/Infocard.jsx'
import Contact from './pages/Contact.jsx'

function Home() {
  return(
  <>
    
     <Navbar/>  
    

  <h1 className='title'>PC Konfigurátor</h1>

<section className='container col-8 d-flex flex-wrap felx-direction-row gap-1'>
<Infocard title={"Gépösszerakás"} description={"HEllo"} /> 
<Infocard title={"Egyedi konfiguráció"} description={"HEllo"} /> 
<Infocard title={"Szervíz"} description={"HEllo"} /> 
  </section>




    </>

  );
}

const App = (props) => {
 

   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home  
            />
          } 
        />
        < Route path="/contact" element={<Contact/>}> </Route>
        
      </Routes>
    </BrowserRouter>
   );
 
}

export default App;
