import React from 'react'
import './contacto.css';

const Contacto = () => {
  return (
    <section className='min-vh-100 container_contacto' id='contacto'>
      <section className='bg-opacidad-contacto min-vh-100 d-flex align-items-center'>
      <div className='container py-5 py-md-0'>
        <article className='container_contacto_parrafo mx-auto mb-5 mb-lg-0'>
          <h2 className='text-center mb-3 w-700'>Contacto</h2>
          <p className='text-center w-500'>Para mas información o consultas sobre nuestro servicio, te invitamos a llenar el formulario de contacto con tus datos para comunicarnos con vos a la brevedad. </p>
        </article>
        <form className='mx-auto' onSubmit={'return false;'}>
         <div className='row'>
            <div className='col-12 col-lg-6'>
              <label htmlFor="lbl-nombre" className='form-label w-500'>Nombres *</label>
              <input type="text" className='form-control mb-3' id='lbl-nombre' name='nombre' required/>
              <label htmlFor="lbl-email" className='form-label w-500'>Email *</label>
              <input type="text" className='form-control mb-3' id='lbl-email' name='email' required/>
              <label htmlFor="lbl-empresa" className='form-label w-500'>Nombre empresa</label>
              <input type="text" className='form-control mb-3' id='lbl-empresa' name='empresa' required/>
            </div>
            <div className='col-12 col-lg-6'>
              <label htmlFor="lbl-mensaje" className='form-label w-500'>Mensaje *</label>
              <textarea name="mensaje" className='form-control' id="lbl-mensaje" cols="30" rows="10" required></textarea>
            </div>
          </div>
          <button type='submit' className='btn btn-dark d-block w-50 mx-auto mt-4'>Enviar</button>
        </form>
      </div>
      </section>
      <figure className='container_wsp'>
        <a href="/#">
        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" className='img-fluid' alt="" />
        </a>
      </figure>
    </section>
  )
}

export default Contacto