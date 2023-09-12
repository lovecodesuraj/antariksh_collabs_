import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blogs/Blog';
import Admin from './pages/Admin/Admin';
import ContactCard from './pages/Contact/ContactCard';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import EventsPage from './pages/Events/EventsPage';
import About from './pages/About/About';

function App() {
  return (
    <div className='main-container'>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={
          <>
          <Home /> 
          {/* <ContactCard /> */}
          <EventsPage/>
          <About/>
          <Footer/>
          </>
        } />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/contact" exact element={<ContactCard />} />
        {/* ... */}
      </Routes >
    </div>
  );
}

export default App;
