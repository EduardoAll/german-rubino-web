import React from 'react';
import './Covercontacto.css';
import planeando from '../../media/planeando.mp4';

const Covercontacto = () => {
  return(
      <div className='cover-container'>
        <video className='video' src={planeando} autoPlay loop muted />

      </div>

  );
}

export default Covercontacto;
