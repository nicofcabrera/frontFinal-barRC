import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FilaPedidos from '../FilaPedidos/FilaPedidos';

const TablaPedidos = ({user}) => {
  const [pedido, setPedido] = useState([]);
 // const URL = 'http://localhost:8000/get-menu'
  const URL = 'https://backfinal-barrc-production.up.railway.app'

  const getPedidos = async () => {
    const { data } = await axios.get(`${URL}/get-pedido`)
    setPedido(data);
  }

  useEffect(() => {
    getPedidos()
  })


  return (
    <div className='table-responsive'>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Fecha</th>
              <th scope="col">Menú</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
          {
            pedido.map(result =>
              <tr className={ result.estado === 'Entregado' ? 'bg-success bg-opacity-25' : 'bg-warning bg-opacity-25' } key={result._id}>
                <FilaPedidos id={result._id} usuario1={result.usuario} fecha1={result.fecha} menu1={result.menu} estado1={result.estado} user={user} />
              </tr>
            )  
          }
          </tbody>
      </table>
    </div>
  )
}

export default TablaPedidos
