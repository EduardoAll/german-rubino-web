import React from 'react';
import { TailSpin }from 'react-loader-spinner';
import './Loading.css';


const Loading = () => {
  return(
    <div className='loader'>
      <TailSpin
              className='tails-spin'
              color="white"
              height={200}
              width={200}
              timeout={3000}
      />
    </div>
  )
}

export default Loading;
