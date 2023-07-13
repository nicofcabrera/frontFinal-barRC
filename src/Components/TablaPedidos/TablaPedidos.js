import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FilaPedidos from '../FilaPedidos/FilaPedidos';

const TablaPedidos = ({comanda, user}) => {
  const [pedido, setPedido] = useState([]);

  const getPedidos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-pedido')
    setPedido(data);
  }

  useEffect(() => {
    getPedidos()
  })


  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Fecha</th>
            <th scope="col">Menú</th>
            <th scope="col">Estado</th>
            {/* <th>Comanda</th> */}
          </tr>
        </thead>
        <tbody>
        {
          pedido.map(result =>
            <tr className='fila_pedidos' key={result._id}>
              <FilaPedidos id={result._id} usuario1={result.usuario} fecha1={result.fecha} menu1={result.menu} estado1={result.estado} comanda={comanda} user={user} />
            </tr>
          )  
        }
        </tbody>
    </table>
  )
}

export default TablaPedidos
