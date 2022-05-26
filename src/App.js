import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componentsa/Home';
import NavBar from './componentsa/NavBar';
import GalleryYOU from './componentsa/Gallery';
import Events from './componentsa/Events';
import Contact from './componentsa/Contact';
import Donate from './componentsa/Donate';
import Footer from './componentsa/Footer';


function App() {
  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<GalleryYOU />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
// home gallery events contact donate 
