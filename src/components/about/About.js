import React from 'react';
import './About.css';
import foto1 from '../../media/foto1.jpg';


const About = () => {
  return(
    <div className='about-container'>
      <div className='about-desc'>
        <p>Oriundo de la ciudad de Mar del Plata, nací el 23 de septiembre de 1995. A partir de los 9 años comencé a tocar la guitarra
y a los 12 empecé a componer. Luego de ser parte de las bandas Plug, Gen Cibay y Frecuencia Modulada (siendo parte del festival BolivarRock 2014, junto a Las Pelotas),
emprendí mi camino como cantautor solista e independiente.
En 2019 lancé mi primer Ep 'Relatos' contando con el videoclip ´Planeando'.
Ese mismo año salió a la luz el sencillo 'Basta Para Mi', en 2020 se publicaron los videoclips de 'Corazón Inquieto' y ´Me Conformo'.
Luego de un año de producción, y ya viviendo en La Plata, en 2021, vió la luz el álbum 'La Fuga' que me permitió compartir escenario con artistas que admiro mucho,
como Litto Nebbia y Leo García.
Actualmente me encuentro produciendo un nuevo proyecto titulado 'ATMOS' una serie de ep's conceptuales, culminando en el álbum homónimo completo.
Toda una travesía.</p>
      </div>
      <div className='about-img'>
        <img src={foto1} alt='about' />
      </div>
    </div>
  );
}


export default About;
