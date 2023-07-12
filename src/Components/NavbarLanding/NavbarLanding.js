import React from 'react'
import './navbar.css';

const NavbarLanding = ({title, linkUno, linkDos, linkTres, linkCuatro, linkCinco, linkSeis}) => {
//  https://i.ibb.co/ZWNxr2K/burguer.png
  // https://i.postimg.cc/brMCVGc8/Whats-App-Image-2023-02-09-at-02-15-12-1.jpg
  // https://i.ibb.co/Lhjt4Qd/burguer-1.png
  // https://i.ibb.co/HTpxrx5/jarro.png
  return (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark bg-navegacion" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand " href="/">
        <img className='img_logo me-1' src="https://i.ibb.co/HTpxrx5/jarro.png" alt="img logoprueba" />
        {title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarPrincipal">
        <ul className="navbar-nav text-end ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link link_navegacion" aria-current="page" href={'#'+linkUno}>{linkUno}</a>
          </li>
          <li className="nav-item">
              <a className="nav-link link_navegacion" aria-current="page" href={'#'+linkDos}>{linkDos}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_navegacion"  aria-current="page" href={'#'+linkTres}>{linkTres}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_navegacion" aria-current="page" href='/login'>{linkCuatro}</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-light" aria-current="page" href='/registro'>{linkCinco}</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}

export default NavbarLanding