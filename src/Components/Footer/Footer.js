import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-menu py-3 bg-dark'>
      <div className='footer-titulo-logo'>
        <div className='footer-titulo text-light'>
          <p>Bar RC</p>
        </div>
        <div>    
          <img className='footer-logo' src='https://i.ibb.co/HTpxrx5/jarro.png' alt='logo bar rc'></img>     
        </div>
      </div>
        <div className='footer-redes text-light my-2'>
          <a href="https://www.facebook.com/" target='_blank' className='text-white'>
            <i className="bi bi-facebook me-3"></i>
          </a>
          <a href="https://www.instagram.com/" target='_blank' className='text-white'>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://twitter.com/" target='_blank' className='text-white'>
            <i className="bi bi-twitter ms-3"></i>
          </a>  
      </div>
      <div className='footer-contacto text-light'>
        <div className='contacto'>
        <p>Contáctanos</p>
        </div>
        <div className='descripcion'>
          <p>Tel: +156-3815112233. Lunes a Viernes de 8:00 a 19:00 hs.</p>        
        </div>
      </div>
      <div className='footer-derechos text-light'>
        <p>2023 Bar RC. Todos los derechos reservados. <i className="bi bi-c-circle"></i></p>
      </div>
      
    </div>
    </footer>
  )
}

export default Footer