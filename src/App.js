import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Continents from './components/Contnents';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/continent/:continent" element={<Home />} />
        <Route path="/country/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
