import React from 'react';
import './Coverbio.css';
import pasolento from '../../media/pasolento.mp4';

const Coverbio = () => {
  return(
      <div className='cover-container'>
        <video className='video' src={pasolento} autoPlay loop muted />
      </div>

  );
}

export default Coverbio;
