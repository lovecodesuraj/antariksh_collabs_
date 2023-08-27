import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Admin from './pages/Admin/Admin';
import Navbar from './pages/Home/components/navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/admin" exact element={<Admin />} />
      </Routes >
      <Navbar />
      <Home />
      <Blogs />
      <Gallery />
    </>
  );
}

export default App;
