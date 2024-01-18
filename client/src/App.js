import './App.css';
import Gallery from './pages/Gallery/Gallery';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Blogs from './pages/Blogs/Blogs';
import Admin from './pages/Admin/Admin';
import Members from './pages/Members/Members';
import Footer from './pages/Footer/Footer';
import EventsPage from './pages/Events/EventsPage';
import About from './pages/About/About';
import Navbar from './pages/Home/components/navbar/Navbar';
import NewsBox from './pages/News/News-Box';
// import { useEffect, useState } from 'react';
import './fonts/fonts.css'
import Newsletter from './pages/Newsletter/Newsletter';
// import Newsletter from './pages/Newsletter/Newsletter.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/newsletter" exact element={<Newsletter />} />

        <Route path="/" exact element={

          <>
            <Navbar />
            <Home />
            <EventsPage />
            <Members />
            {/* <Blogs /> */}
            {/* <NewsBox/> */}
            <Gallery />
            <About />
            <Footer />
          </>}


        />
      </Routes >

      {/* <Newsletter/> */}


    </>
  );
}

export default App;
