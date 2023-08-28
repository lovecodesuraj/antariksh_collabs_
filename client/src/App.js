
import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BlogPost from './pages/Blogpost/BlogPost';
import BlogPost2 from './pages/Blogpost/BlogPost2';
import Blogpages from './pages/Blogpost/Blogpages';
function App() {
  return (
    <>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/gallery" exact element={<Gallery />} />
      {/* ... */}
    </Routes >
    <Routes>
      <Route path='/BlogPost' element={<BlogPost/>}/>
      <Route path='/BlogPost2' element={<BlogPost2/>}/>
  </Routes>
    {/* <BlogPost/> */}
    <Blogpages/>
    </>
  );
}

export default App;
