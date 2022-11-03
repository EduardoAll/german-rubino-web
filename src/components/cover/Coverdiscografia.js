import React from 'react';
import './Coverdiscografia.css';
import corazon from '../../media/corazon.mp4';

const Coverdiscografia = () => {
  return(
      <div className='cover-container'>
        <video className='video' src={corazon} autoPlay loop muted />
      </div>

  );
}

export default Coverdiscografia;
