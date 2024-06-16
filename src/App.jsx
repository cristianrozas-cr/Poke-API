import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Pokemones from './views/Pokemones';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetallePokemon from './views/DetallePokemon';
import Home from './views/Home';

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pokemones' element={<Pokemones />}/>
      <Route path='/pokemones/:name' element={<DetallePokemon />}/>
    </Routes>
    </>
  )
}

export default App
