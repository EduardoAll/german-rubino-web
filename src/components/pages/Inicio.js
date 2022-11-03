import React from 'react';
import Coverinicio from '../cover/Coverinicio';
import styled from 'styled-components';
import Info from '../info/Info';

const Inicio = () => {
  return(
    <MainContainer>
      <Coverinicio />
      <div className='contenedor-spoty'>
        <h2 className='titulo-spoty'>¡Escuchá a Germán Rubino ahora!</h2>
        <iframe className='spoty' src="https://open.spotify.com/embed/playlist/0qqP7YbPQXYEPzGejzNI0i" title="Spotify player" frameBorder="0" allow="encrypted-media">
        </iframe>
      </div>
      <div className='contenedor-promo'>
        <h2 className='titulo-promo'>Último videoclip:</h2>
        <iframe className='video-promo' src="https://www.youtube.com/embed/D5y3Z1DSE1o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
      <Info />
    </MainContainer>
  );
}

export default Inicio;


const MainContainer = styled.div`

  .contenedor-spoty {
    display: flex;
    background-color: white;
    color: black;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
  }

  .contenedor-spoty > h2 {
    display: flex;
    font-size: 40px;
    text-align: center;
    justify-content: justify;
    margin: auto;
  }

  .contenedor-spoty > iframe {
    display: flex;
    margin-right: 2em;
    width: 50vw;
    height: 60vh;
    margin-top: 4em;
  }

  .contenedor-promo {
    display: flex;
    background-color: black;
    color: black;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  .contenedor-promo > h2 {
    display: flex;
    font-size: 40px;
    text-align: center;
    justify-content: center;
    margin: auto;
    color: white;
  }

  .contenedor-promo > iframe {
    display: flex;
    width: 50vw;
    height: 60vh;
    margin-right: 2em;
  }

  @media screen and (max-width:480px) {
     .contenedor-spoty {
       flex-direction: column;
     }

     .contenedor-spoty > iframe {
       margin: auto;
       width: 80vw;
     }


     .contenedor-promo {
       flex-direction: column;
     }

     .contenedor-promo > iframe {
       margin: auto;
       width: 80vw;
     }

  }

  @media screen and (orientation:landscape) and (max-width:960px)  {
    .contenedor-spoty{
      height: 100vh;
    }
    .contenedor-spoty > iframe {
      height: 70vh;
      width: 60vw;
    }
}

`
