import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Glycocaylx from './components/Glycocaylx';
import ImmuneCells from './components/ImmuneCells';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/glycocaylx" element={<Glycocaylx />} />
      <Route path="/immune-cells" element={<ImmuneCells />} />
    </Routes>
  )
}

export default App