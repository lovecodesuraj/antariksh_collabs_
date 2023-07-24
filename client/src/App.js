import logo from './logo.svg';
import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blogs/Blog';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/gallery" exact element={<Gallery />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/admin" exact element={<Admin />} />
      {/* ... */}
    </Routes >
    </>
  );
}

export default App;
