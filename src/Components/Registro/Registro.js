import React from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useForm } from "react-hook-form";
import './register.css'

const Registro = () => {

  const patternEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  const patternName = /^[A-Za-z]+$/i;
  const URL = 'http://localhost:8000/post-user'
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let confirma = window.confirm('Desea Registrarse?');
    if (confirma) {
      await axios.post(URL, data);
      alert('Usuario registrado!')
      window.location = 'http://localhost:3000/login'
    }
  }


  return (
    <>
     <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
      <main className='min-vh-100'>
        <div className="container">
          <h1>Registro</h1>
          <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-3 justify-content-center align-items-center">
              <label htmlFor="lbl-name" className='form-label'>Nombre</label>
              <input type="text" className={errors.nombre ? "form-control border-danger" : "form-control"} id="lbl-name" placeholder='Ingresa tu nombre' name='nombre' maxLength={'25'} required {...register("nombre", {
                required: "Ingresa tu nombre",
                minLength: {
                  value: 3,
                  message: 'Minimo 3 caracteres'
                },
                maxLength: {
                  value: 25,
                  message: 'Maximo 25 caracteres'
                },
                pattern: {
                  value: patternName,
                  message: 'Utilize formato adecuado para el nombre'
                }
              })}/>
              <p className='text-danger small'>{errors.nombre?.message}</p>
            </div>
            <div className="mb-3 justify-content-center align-items-center">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className={errors.email ? "form-control border-danger" : "form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu email' name='email' maxLength={'30'} required {...register("email", {
                required: "Ingresa tu email",
                pattern: {
                  value: patternEmail,
                  message: 'Error de mail'
                }
              })}/>
              <p className='text-danger small'>{errors.email?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className={errors.password ? "form-control border-danger" : "form-control"} id="exampleInputPassword1" maxLength={'12'}  name='password' required {...register("password", {
                required: "Ingresa tu contraseña",
                minLength: {
                  value: 6,
                  message: 'Minimo 6 caracteres'
                },
                maxLength: {
                  value: 12,
                  message: 'Maximo 12 caracteres'
                }
              })} />
              <p className='text-danger small'>{errors.password?.message}</p>
            </div>
            <button type="submit" className="btn btn-dark w-50 d-block mx-auto mx-md-0 ms-md-auto btn-form" >Registrarse</button>
          </form>
        </div>       
      </main>
      <Footer styles={'position-absolute bottom-0 w-100'} />
    </>
  )
}

export default Registro