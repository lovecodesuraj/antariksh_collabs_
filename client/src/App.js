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

function App() {
  const blogs=[
    {
      title:"welcome to antariksh",
      img:"https://imgs.search.brave.com/mcXBxXKs_YGamJmy_2l1wyakapB3fs-1st5ShgxyKus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MjU2NDY1L3Bob3Rv/L2xhbmRzY2FwZS12/aWV3LW9mLWthbmR5/LXNyaS1sYW5rYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wm01THpmdFNzbmJU/dVk5d0txU1lBRmdW/enZSNEFwZGpRb3RC/dTZkcDZzND0",
      liveUrl:"/",
      keyword:["antariksh","astronomy"],
      subtitle:"We welcome you to the antariksh",
    },
    {
      title:"welcome to antariksh",
      img:"https://imgs.search.brave.com/mcXBxXKs_YGamJmy_2l1wyakapB3fs-1st5ShgxyKus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MjU2NDY1L3Bob3Rv/L2xhbmRzY2FwZS12/aWV3LW9mLWthbmR5/LXNyaS1sYW5rYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wm01THpmdFNzbmJU/dVk5d0txU1lBRmdW/enZSNEFwZGpRb3RC/dTZkcDZzND0",
      liveUrl:"/",
      keyword:["antariksh","astronomy"],
      subtitle:"We welcome you to the antariksh",
    },
    {
      title:"welcome to antariksh",
      img:"https://imgs.search.brave.com/mcXBxXKs_YGamJmy_2l1wyakapB3fs-1st5ShgxyKus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MjU2NDY1L3Bob3Rv/L2xhbmRzY2FwZS12/aWV3LW9mLWthbmR5/LXNyaS1sYW5rYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wm01THpmdFNzbmJU/dVk5d0txU1lBRmdW/enZSNEFwZGpRb3RC/dTZkcDZzND0",
      liveUrl:"/",
      keyword:["antariksh","astronomy"],
      subtitle:"We welcome you to the antariksh",
    },
    {
      title:"welcome to antariksh",
      img:"https://imgs.search.brave.com/mcXBxXKs_YGamJmy_2l1wyakapB3fs-1st5ShgxyKus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MjU2NDY1L3Bob3Rv/L2xhbmRzY2FwZS12/aWV3LW9mLWthbmR5/LXNyaS1sYW5rYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wm01THpmdFNzbmJU/dVk5d0txU1lBRmdW/enZSNEFwZGpRb3RC/dTZkcDZzND0",
      liveUrl:"/",
      keyword:["antariksh","astronomy"],
      subtitle:"We welcome you to the antariksh",
    },
  ];
  const highlights=[{
    image:"https://imgs.search.brave.com/1l-NNHZMxI0hGUYevlkiX1DxU2_xAi_TKpQPxaaagtE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/c3Ryb25hdXQtZXhw/bG9yZXMtb3V0ZXIt/ZGFyay1zcGFjZS1n/ZW5lcmF0aXZlLWFs/XzE2OTAxNi0yODYw/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
    title:"welcome to antariksh",
    publishTime:"15 sept 2023"
  },
  { image:"https://imgs.search.brave.com/qvHR8_vtuebt7Il1QGyg5f8qVq4pu1m-5s0iij_F4nw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NjIzMzI0MjA5NTgt/YTA1ZDFlMDAyNDEz/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4T1h4/OFlYTjBjbTl1YjIx/NWZHVnVmREI4ZkRC/OGZId3cmdz0xMDAw/JnE9ODA.jpeg",
    title:"welcome to antariksh",
    publishTime:"15 sept 2023"
  }
]

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
