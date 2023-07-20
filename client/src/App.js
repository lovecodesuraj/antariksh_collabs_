import logo from './logo.svg';
import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/gallery" exact element={<Gallery />} />
      {/* ... */}
    </Routes >
    </>
  );
}

export default App;
