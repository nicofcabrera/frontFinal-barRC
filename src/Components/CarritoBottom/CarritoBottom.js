import axios from 'axios';
import React, { useState } from 'react'

const CarritoBottom = ({ allProducts, setAllProducts, total, setTotal, contador, setContador,setComanda, user, fecha }) => {
  
  // const URL = 'http://localhost:8000'
  const URL = 'https://backfinal-barrc-production.up.railway.app'

  const deleteProduct = (product) => {
    const result = allProducts.filter(
      item => item._id !== product._id
    );

    setTotal(total - product.precio * product.cantidad)
    setContador(contador - product.cantidad)
    setAllProducts(result)
  }

  const vaciarCarro = () => {
    setTotal(0)
    setContador(0)
    setAllProducts([])
  }

  const datos = user

  const enviarPedido = async () => {
    const modal = document.getElementById('exampleModal');
    const myModal = bootstrap.Modal.getInstance(modal);

    const mappedProduct = allProducts.map(result => `${result.cantidad} ${result.nombre}`)
    setComanda(mappedProduct)
    
    const resultado = await axios.post(`${URL}/post-pedido`, {
      usuario: datos.data.user.nombre,
      fecha: fecha,
      menu: mappedProduct
    })

  
    alert('¡Se envió tu pedido!')
    setTotal(0)
    setContador(0)
    setAllProducts([])
    myModal.hide();
  }

  return (
    <>
    <button className='d-block btn btn-dark w-25 mx-auto position-sticky bottom-0 start-50 translate-middle-x' data-bs-toggle="modal" data-bs-target="#exampleModal">
      {`(${contador})`} <i className="bi bi-cart-fill"></i> Ver carrito
      </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="exampleModalLabel">Pedido</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body position-relative">
              {
                allProducts.length ?
                  (
                    allProducts.map(product => (
                      <p key={product._id}><span> {product.cantidad}</span> {product.nombre} <span>${product.precio}</span><button className='position-absolute end-0 me-2' onClick={() => deleteProduct(product
                      )}><i className="bi bi-x-lg"></i></button></p>
                    ))
                )
                  : (<p>El carrito esta vacio</p>)
              }
              {
                total ? (
                  <>
                  <p className='text-center'>Total: ${total}</p>
                  <button className='d-block w-100 btn btn-info' onClick={vaciarCarro}>Vaciar Carrito</button>
                  <button className='d-block w-100 btn btn-success mt-3' onClick={enviarPedido}>Enviar pedido</button>
                  </>
                ) : false
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarritoBottom