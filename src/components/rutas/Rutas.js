import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Inicio from '../pages/Inicio';
import Tour from '../pages/Tour';
import Bio from '../pages/Bio';
import Discografia from '../pages/Discografia';
import Contacto from '../pages/Contacto';



import Loading from '../loading/Loading';
import Navbar from '../navbar/Navbar';

import Footer from '../footer/Footer';

const Rutas = () => {

  const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   })

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight])

  return (
    <>
      {isLoading===true?
        <Loading />:
      <Router>
        <Navbar isScrolling={scrollHeight}/>

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/discografia' element={<Discografia />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </Router >
      }
    </>
  );
}

export default Rutas;
