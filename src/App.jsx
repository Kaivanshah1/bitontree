import Navbar from './components/Navbar'
import CharacterDetails from './pages/CharacterDetail';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
