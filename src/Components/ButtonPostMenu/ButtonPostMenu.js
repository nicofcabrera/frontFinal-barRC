import axios from 'axios'
import React, { useState } from 'react'

const ButtonPostMenu = () => {
  
  const [update, setUpdate] = useState({})
  const [confirm, setConfirm] = useState(false)
  const URL = 'http://localhost:8000'


  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdate({
      ...update,
      [name]:value
    })
  }


  const posteaMenu = async () => {
    try {
      e.preventDefault()
      let confirma = window.confirm('Desea postear el Menu?');
      if (confirma) {
        await axios.post(`${URL}/post-menu`, update);
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
    <>
      <button className='btn btn-dark rounded-circle' data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="bi bi-plus fs-5"></i>
      </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Postear nuevo menu</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='container' onSubmit={posteaMenu}>
              <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="lbl-nombre" placeholder="Ingrese nombre de la comida" name='nombre' pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title='Agregue el titulo con formato adecuado.' required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-estado" className="form-label">Estado</label>
                <input type="text" className="form-control" id="lbl-estado" placeholder="Ingrese descripcion" name='estado' required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-precio" className="form-label">Precio</label>
                <input type="text" className="form-control" id="lbl-precio" placeholder="Ingrese precio" name='precio' pattern="[0-9]{4}" title='Solo numeros de 4 cifras' minLength={1} maxLength={4} required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-desc" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="lbl-desc" placeholder="Ingrese precio" name='detalle' maxLength={150} required onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-cat" className="form-label">Categoria</label>
                  <input type="text" className="form-control" id="lbl-cat" placeholder="Ingrese precio" name='categoria' required onChange={handleChange} />
                  {/* Cambiar por select */}
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-img" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="lbl-img" placeholder="Ingrese solo url de la img" name='img' required onChange={handleChange}/>
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
        </div>
          </div>
      </div>
    </div>
  </>
)
}

export default ButtonPostMenu