import React from 'react';
import './Shows.css';
import images2 from '../../exports/images2';
import { motion } from 'framer-motion';
import uuid from "react-uuid";


const Shows = () => {
  return(
    <div className='main-container'>
      <motion.div className='slider-container'>
        <h2>Fechas 2022</h2>
        <motion.div className='slider' drag='x' dragConstraints={{right: 0, left:-4500}} >
        {images2.map(image => (
            <motion.div className='item' key={uuid()}>
              <img src={image} alt='' />
            </motion.div>
        ))}
        </motion.div>
      </motion.div>
      <div className='fechas-confirmadas'>
        <h2>Fechas confirmadas:</h2>
        <div className='contenedor-fecha'>
          <h3>25/7/2022</h3>
          <p className='info'>El Jardim, Mar del Plata, 22hs.</p>
        </div>
        <div className='contenedor-fecha'>
          <h3>25/7/2022</h3>
          <p className='info'>Daytona, Mar del Plata, 22hs.</p>
        </div>
        <div className='contenedor-fecha'>
          <h3>25/7/2022</h3>
          <p className='info'>Teatro Osvaldo Soriano, Mar del Plata, 22hs.</p>
        </div>
      </div>
    </div>
  );
}


export default Shows;
