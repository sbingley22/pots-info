import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Glycocaylx from './components/Glycocaylx';
import Diapedesis from './components/Diapedesis';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/glycocaylx" element={<Glycocaylx />} />
      <Route path="/diapedesis" element={<Diapedesis />} />
    </Routes>
  )
}

export default App