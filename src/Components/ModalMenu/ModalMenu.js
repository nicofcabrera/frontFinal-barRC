import axios from 'axios';
import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';


const ModalMenu = ({_id}) => {

  const [update, setUpdate] = useState({})
  const [confirm, setConfirm] = useState(false)
  
  // const { register, handleSubmit, formState: { errors } } = useForm();  
  // const patternName = /^[A-Za-z]+$/i;



const handleChange = (e) => {
    const { name, value } = e.target
    setUpdate({
      ...update,
      id: _id,
      [name]:value
    })
  }
  

const actualizaMenu = async () => {
  
  let confirma = window.confirm('Desea actualizar el Menu?');
    if (confirma) {
      await axios.patch('http://localhost:8000/patch-menu', update);
      setConfirm(confirma)
      setTimeout(() => {
        setConfirm(false)
      }, 7000);
  } else {
    setConfirm(confirma)
  }
  }
  

  return (
    <div className="modal fade" id={_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Realizar modificacion</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              {
                confirm ? (
                  <>
                    <p className='text-center'>¡Cambiado!</p>
                    <p className='text-center small fst-italic'>Puede cerrar la ventana.</p>
                  </>
                ) : (
                  <>
                 <form className='container needs-validation' onSubmit={actualizaMenu} noValidate>
                      <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese nombre de la comida" name='newNom' required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese descripcion" name='newDesc' required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Precio</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Ingrese precio" name='newPre' required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingrese solo url de la img" name='newImg' required onChange={handleChange}/>
              </div>
            </form>          
              </>
                )
              }
          </div>
          <div className="modal-footer">
            {
              confirm ? (
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              ) : (
                // <button type="button" className="btn btn-secondary" onClick={actualizaMenu} >Enviar</button>                 
                <button type="submit" className="btn btn-secondary">Enviar</button>                 
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMenu
