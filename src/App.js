import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componentsa/About';
import Home from './componentsa/Home';
import NavBar from './componentsa/NavBar';


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </div>
  );
}

export default App;
