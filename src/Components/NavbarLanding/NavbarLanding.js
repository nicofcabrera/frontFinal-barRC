import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

const NavbarLanding = ({ title, user,setUser1, linkTres, linkCuatro, linkCinco }) => {
  
  const onLogout = () => {
    setUser1(false)
  }

  return (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark bg-navegacion" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand " to={'/'}>
        <img className='img_logo me-1' src="https://i.ibb.co/HTpxrx5/jarro.png" alt="img logoprueba" />
          {title}
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarPrincipal">
          <ul className="navbar-nav text-end ms-auto mb-2 mb-lg-0">
            {
              user ? (
              <li className="nav-item">
                <Link className="btn btn-light" aria-current="page" to={'/'} onClick={onLogout}>{linkTres}</Link>
              </li>
              ) : (
                <>                 
                  <li className="nav-item">
                    <Link className="nav-link link_navegacion" aria-current="page" to={'/login'}>{linkCuatro}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-light" aria-current="page" to={'/registro'}>{linkCinco}</Link>
                  </li>
                </>
              )
            }
         
        </ul>
      </div>
    </div>
</nav>
  )
}

export default NavbarLanding