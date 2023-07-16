import axios from 'axios';
import React, { useState } from 'react'

const ModalMenu = ({_id}) => {

  const [update, setUpdate] = useState({})
  // const [confirm,setConfirm] = useState()

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
    // setConfirm(confirma)
  if (confirma) {
    await axios.patch('http://localhost:8000/patch-menu', update);
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
            <form className='container'>
               <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese nombre de la comida" name='newNom' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese descripcion" name='newDesc' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Precio</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Ingrese precio" name='newPre' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingrese solo url de la img" name='newImg' onChange={handleChange}/>
              </div> 
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={actualizaMenu} >Enviar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMenu
