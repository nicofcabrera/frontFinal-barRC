import React from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
      <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'}/>
      <main className='min-vh-100 p-5'>
        <h1 className='text-center mb-5'>¡Bienvenid@s al Bar RC!</h1>
        <section className='container'>
          <div className="row">
            <article className='col-12 col-md-6 order-2 order-md-1'>       
              <p className='mt-5'>¡Bienvenidos a nuestro acogedor Bar RC! Aquí encontrarán el lugar perfecto para relajarse, disfrutar de deliciosas bebidas y sumergirse en un ambiente vibrante y amigable.</p> 
              <p>Nuestro equipo está listo para ofrecerles un servicio excepcional mientras se deleitan con nuestra amplia selección de comidas y cervezas.</p>
              <p>¡Esperamos que tengan una experiencia inolvidable entre amigos y se conviertan en parte de nuestra gran familia de clientes satisfechos! ¡Salud! 🍻.</p>
              <div className="container w-50 d-flex flex-column align-items-center mt-5 gap-3">
                <Link to={'/login'} className='fs-5 text-dark'>Ingresar</Link>
                <Link to={'/registro'} className='btn btn-dark text-white fs-3'>Registrarse</Link>
              </div>
          </article>
          <article className='col-12 col-md-6 order-1 order-md-2'>
            <img src="https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded' alt="Foto inicio"/>
          </article>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Inicio