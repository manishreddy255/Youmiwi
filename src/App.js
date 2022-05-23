import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componentsa/About';
import Home from './componentsa/Home';
import JoinUs from './componentsa/JoinUs';
import NavBar from './componentsa/NavBar';


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route  path='/joinUs' element={<JoinUs/>}/>
    </Routes>
    </div>
  );
}

export default App;
