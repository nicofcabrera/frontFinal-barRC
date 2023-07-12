import React from 'react'
import './errorPage.css'

const ErrorPage = () => {
  return (
    <main className='container_error'>
      <article>
        <h1 className='title-error'>4<i className="bi bi-bug"></i>4</h1>
        <p className='p-error'>Sitio no encontrado</p>
        <a className='link-error' href="/" title="Clic para volver">Clic aqui para volver al sitio</a>
      </article>
    </main>
  )
}

export default ErrorPage