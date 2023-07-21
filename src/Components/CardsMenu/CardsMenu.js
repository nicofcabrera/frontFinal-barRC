import axios from 'axios';
import React from 'react'
import ModalMenu from '../ModalMenu/ModalMenu';
import './cardsMenu.css'

const CardsMenu = ({ nombre, precio, detalle, categoria, img, id }) => {

  // const URL = 'http://localhost:8000'
  const URL = 'https://backfinal-barrc-production.up.railway.app'
  const token = window.localStorage.getItem('role')

  const deleteMenu = async () => {
    let confirma = window.confirm('Desea eliminar el Menu?');
    if (confirma) {
      const { data } = await axios.delete(`${URL}/delete-menu/${id}`, {data: {accesToken: token}});
      alert(`${data.mensaje}`)
    }
  }

return (
  <>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={img} className="img-auto w-100 h-100" alt="..." />
      </div>
      <div className="col-md-8 col-sm-8 col-xs-8">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{detalle}</p>
          <p className="card-text text-underline">Precio: {precio}</p>
          <p className="card-text">Cat: {categoria}</p>
          <div className='d-flex justify-content-end'>
            <button className='bg-black text-white border border-black rounded-circle button-fila' data-bs-toggle="modal" data-bs-target={'#'+ id}><i className="bi bi-pencil-square"></i></button>
            <button className='bg-danger text-white border border-black rounded-circle button-fila ms-3' onClick={deleteMenu}><i className="bi bi-x-circle"></i></button>
          </div>
        </div>
      </div>
    </div>
    <ModalMenu _id={id} />
  </>
  )
}

export default CardsMenu
