import axios from 'axios'
import React, { useState } from 'react'

const ButtonPostMenu = () => {
  
  const [update, setUpdate] = useState({})
  const [confirm, setConfirm] = useState(false)
  const [mensaje, setMensaje] = useState()
  // const URL = 'http://localhost:8000'
  const URL = 'https://backfinal-barrc-production.up.railway.app'


  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdate({
      ...update,
      [name]:value
    })
  }


  const posteaMenu = async (e) => {
    try {
      e.preventDefault()
      let confirma = window.confirm('Desea postear el Menu?');
      if (confirma) {
        const {data} = await axios.post(`${URL}/post-menu`, update);
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
            {
                confirm ? (
                   <>
                    <p className='text-center'>{mensaje}</p>
                    <p className='text-center small fst-italic'>Puede cerrar la ventana.</p>
                  </>
                ) : (
                  <>
                    <p className='small fst-italic text-end'>*Todos los campos son obligatorios.</p>
                    <form className='container' onSubmit={posteaMenu}>
                      <div className="mb-3">
                        <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="lbl-nombre" placeholder="Ingrese nombre de la comida" name='nombre' pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title='Agregue el titulo con formato adecuado.' required onChange={handleChange}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lbl-precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" id="lbl-precio" placeholder="Ingrese precio" name='precio' pattern="[0-9]{2,4}" title='Solo numeros de 3 a 4 cifras' minLength={1} maxLength={4} required onChange={handleChange}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lbl-desc" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="lbl-desc" placeholder="Ingrese descripción" name='detalle' maxLength={150} title='Hasta 150 caracteres' required onChange={handleChange}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lbl-cat" className="form-label">Categoria</label>
                          <select name="categoria" id="lbl-cat" className='form-select' onChange={handleChange} required>
                            <option value="">Seleccione una opcion</option>
                            <option value="bebidas">Bebidas</option>
                            <option value="milanesas">Milanesas</option>
                            <option value="burger">Burger</option>
                          </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lbl-img" className="form-label">Imagen</label>
                        <input type="text" className="form-control" id="lbl-img" placeholder="Ingrese solo url de la img" name='img' title='Requiere url de la imagen.' required onChange={handleChange}/>
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
  </>
)
}

export default ButtonPostMenu