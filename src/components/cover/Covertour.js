import React from 'react';
import './Covertour.css';
import ella from '../../media/ella.mp4';

const Covertour = () => {
  return(
      <div className='cover-container'>
        <video className='video' src={ella} autoPlay loop muted />

      </div>

  );
}

export default Covertour;
