import axios from 'axios';
import React, { useState } from 'react';

const ModalMenu = ({_id}) => {

  const [update, setUpdate] = useState({})
  const [confirm, setConfirm] = useState(false)
  const [mensaje, setMensaje] = useState()
  const URL = 'http://localhost:8000'  

  const handleChange = (e) => {
    try {
      const { name, value } = e.target
      setUpdate({
        ...update,
        id: _id,
        [name]:value
      }) 
    } catch (error) {
      console.log(error);
    }
  }
  

  const actualizaMenu = async (e) => {
    try {
      e.preventDefault()
      let confirma = window.confirm('Desea actualizar el Menu?');
      if (confirma) {
        const {data} = await axios.patch(`${URL}/patch-menu`, update);
        setMensaje(data.mensaje)
        setConfirm(confirma)
        setTimeout(() => {
          setConfirm(false)
        }, 7000);
      } else {
        setConfirm(confirma)
      }     
    } catch (error) {
      console.log(error);
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
                  <p className='text-center'>{mensaje}</p>
                    <p className='text-center small fst-italic'>Puede cerrar la ventana.</p>
                  </>
                ) : (
                  <>
                  <p className='small fst-italic text-end'>*Recuerde que puede cambiar un solo campo si lo desea.</p>
                 <form className='container' onSubmit={actualizaMenu}>
                      <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese nombre de la comida" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title='Al menos ingresa el nombre en formato adecuado' required maxLength={25}
                 name='newNom' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese descripcion" name='newDesc' maxLength={150} onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Precio</label>
                  <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Solo numeros de cuatro cifras" name='newPre' pattern="[0-9]{4}" title='Solo numeros de 4 cifras' minLength={1} maxLength={4} onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingrese solo url de la imagen" name='newImg' onChange={handleChange}/>
              </div>
            <div className="modal-footer">
            {
              confirm ? (
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              ) : (                
                <button type="submit" className="btn btn-secondary">Enviar</button>                 
              )
            }
          </div>
                      
            </form>          
              </>
                )
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMenu
