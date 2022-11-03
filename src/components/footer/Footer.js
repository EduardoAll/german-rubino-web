import React from 'react';
import './Footer.css';
import yt from '../../media/yt.png';
import face from '../../media/face.png';
import insta from '../../media/insta.png';
import wpp from '../../media/wpp.png';


const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer-info'>
        <h1>Germán Rubino</h1>
        <p>cantautor</p>
      </div>
      <div className='footer-contact'>
        <h3>Contrataciones:</h3>
        <p>2235353008</p>
      </div>
      <div className='footer-links'>
        <a href='https://www.facebook.com/German.Rubino' target='_blank' rel='noreferrer'>
          <img src={face} height='90px' width='90px' alt='facebook' className='facebook-ico' />
        </a>
        <a href='https://www.instagram.com/germanrubino_/' target='_blank' rel='noreferrer'>
          <img src={insta} height='90px' width='90px' alt='instagram' className='insta-ico' />
        </a>
        <a href='https://wa.me/+542235353008?' target='_blank' rel='noreferrer'>
          <img src={wpp} height='90px' width='90px' alt='whatsapp' className='wpp-ico' />
        </a>
        <a href='https://www.youtube.com/channel/UC2nGEK6hsR0xlWTyfcS0S6g/videos' target='_blank' rel='noreferrer'>
          <img src={yt} height='90px' width='90px' alt='youtube' className='yt-ico' />
        </a>
      </div>

    </footer>
  );
}


export default Footer;
