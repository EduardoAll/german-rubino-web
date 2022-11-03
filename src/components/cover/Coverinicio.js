import React from 'react';
import './Coverinicio.css';
import conformo from '../../media/conformo.mp4';

const Coverinicio = () => {
  return(
      <div className='cover-container'>
        <video className='video' src={conformo} autoPlay loop muted />
      </div>

  );
}

export default Coverinicio;
