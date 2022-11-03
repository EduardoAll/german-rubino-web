import React from 'react';
import './Discos.css';
import relatos from '../../media/relatos.jpg';
import basta from '../../media/basta.jpg';
import corazon from '../../media/corazon.jpg';
import conformo from '../../media/conformo.jpg';
import fidelidad from '../../media/fidelidad.jpg';
import fuga from '../../media/fuga.jpg';
import neo1 from '../../media/neo1.jpg';
import neo2 from '../../media/neo2.jpg';
import neofull from '../../media/neofull.jpg';



const Discos = () => {
  return(
    <div className='contenedor'>
      <div className='albums-container'>
        <h2>Albums:</h2>
        <div className='albums'>
          <a href='https://www.youtube.com/watch?v=11e3m3nK7YQ&ab_channel=Germ%C3%A1nRubino' target='blank_' rel='noreferrer'>
            <img src={fuga} alt='' className='item' />
          </a>
            <img src={neofull} alt='' className='item' />
        </div>
      </div>
      <div className='ep-container'>
        <h2>Ep's:</h2>
        <div className='eps'>
          <a href='https://www.youtube.com/watch?v=3OeaXxSq1jY&ab_channel=Germ%C3%A1nRubino' target='blank_' rel='noreferrer'>
            <img src={relatos} alt='' className='item' />
          </a>
            <img src={neo1} alt='' className='item' />
            <img src={neo2} alt='' className='item' />
        </div>
      </div>
      <div className='singles-container'>
        <h2>Sencillos:</h2>
        <div className='singles'>
          <a href='https://www.youtube.com/watch?v=NvBWT5zU1VI&ab_channel=Germ%C3%A1nRubino' target='blank_' rel='noreferrer'>
            <img src={basta} alt='' className='item' />
          </a>
          <a href='https://www.youtube.com/watch?v=qtVX04r0460&ab_channel=Germ%C3%A1nRubino' target='blank_' rel='noreferrer'>
            <img src={corazon} alt='' className='item' />
          </a>
          <a href='https://www.youtube.com/watch?v=D5y3Z1DSE1o&ab_channel=Germ%C3%A1nRubino' target='blank_' rel='noreferrer'>
            <img src={conformo} alt='' className='item' />
          </a>
          <a href='https://www.youtube.com/watch?v=AHvw17FYmq8&ab_channel=Germ%C3%A1nRubino' target='blank_' rel='noreferrer'>
            <img src={fidelidad} alt='' className='item' />
          </a>
        </div>
      </div>

    </div>


  );
}


export default Discos;
