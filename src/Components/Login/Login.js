import React, { useState } from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Login = ({setUser1}) => {

  // const URL = 'http://localhost:8000/userlogin'
  const URL = 'https://backfinal-barrc-production.up.railway.app/userlogin'
  const patternEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  const { register, handleSubmit, formState: { errors } } = useForm();  
  const [aviso, setAviso] = useState();
  const navigate = useNavigate()

  const onLogin = async (data) => {
    const respuesta = await axios.post(URL, data);
    setAviso(respuesta)

    if (respuesta.data.result && respuesta.data.token) {
      window.localStorage.setItem('role', respuesta.data.token)
      setUser1(respuesta)
      navigate('/menu')
    }
  }


  return (
    <>
     <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
    <main className='min-vh-100'>
        <div className="container">
        <h1>Ingresar</h1>
        <form onSubmit={handleSubmit(onLogin)} className='w-50 mx-auto mt-5'>
          <div className="mb-3 justify-content-center align-items-center">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className={errors.email ? "form-control border-danger" : "form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingrese su email' name='email' required {...register("email", {
              required: "Escribi tu email",
                pattern: {
                  value: patternEmail,
                  message: 'Respete el formato para mail'
                }
              })} />
              <p className='text-danger small'>{errors.email?.message}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className={errors.password ? "form-control border-danger" : "form-control"} id="exampleInputPassword1" name='password' placeholder='Ingrese su contraseña' maxLength={'12'} required {...register("password", {
              required: "Escribi tu contraseña",
                minLength: {
                  value: 6,
                  message: 'Minimo 6 caracteres y máximo 12.'
                }
              })} />
              <p className='text-danger small'>{errors.password?.message}</p>
          </div>
          <button type="submit" className="btn btn-dark w-50 d-block mx-auto mx-md-0 ms-md-auto">Ingresar</button>
       </form>
          {
            aviso ? 
            <p className="alert alert-danger alert-dismissible mt-2" role="alert">
              {aviso.data.message}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </p>
            : false
          }
      </div>       
      </main>
      <Footer styles={'position-absolute bottom-0 w-100'} />
    </>
  )
}

export default Login