import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Admin from './pages/Admin/Admin';
import Navbar from './pages/Home/components/navbar/Navbar';
import Contact from './pages/Contact/Contact';
import { useEffect, useState } from 'react';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
import Activities from './pages/Activities/Activities';


import {blogs} from "./public/data/blogs";
import {highlights} from "./public/data/highlights";
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/admin" exact element={<Admin />} />
      </Routes >
      {/* <Navbar /> */}
      <Header />
      <Home />
      <Activities highlights={highlights}/>
      <Blogs blogs={blogs}/>
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
