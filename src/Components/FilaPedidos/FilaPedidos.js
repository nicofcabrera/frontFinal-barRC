import axios from 'axios';
import React, { useEffect } from 'react'

const FilaPedidos = ({ id, usuario1, fecha1, menu1, estado1, fecha }) => {

  
  const cambiarEstado = async () => {
    let confirma = window.confirm('Desea cambiar el estado?');
    if (confirma) {
      const result = await axios.patch('http://localhost:8000/patch-pedido', { id, newEstado: 'Entregado' })
      const { data } = result
      alert(`${data.mensaje}`)
      return result
    }
  }


return (
  <>
    <td>{usuario1}</td>
    <td>{fecha1 ? fecha1.join('-') : null}</td>
    <td>{menu1 ? menu1.join(', ') : null}</td>
    <td>{estado1}</td>
    <td>
      {
        estado1 === 'Pendiente' ? 
        (
        <button className='btn-pedido bg-success text-white border border-black rounded-circle button-fila' onClick={cambiarEstado}>
        <i className="bi bi-check"></i>
      </button>
        )
        : null
      }
      {/* <button className='btn-pedido bg-success text-white border border-black rounded-circle button-fila' onClick={cambiarEstado}>
        <i className="bi bi-check"></i>
      </button> */}
    </td>
  </>
)
}

export default FilaPedidos
