import React from 'react'
import './errorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='container_error'>
      <article>
        <h1 className='title-error'>4<i className="bi bi-bug"></i>4</h1>
        <p className='p-error'>Sitio no encontrado</p>
        <Link className='link-error' to={'/'} title="Clic para volver">Clic aqui para volver al sitio</Link>
      </article>
    </main>
  )
}

export default ErrorPage