import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardsMenu from '../CardsMenu/CardsMenu';

const ContenidoMenu = ({user}) => {

  const [datos, setData] = useState([]);
  const URL = 'http://localhost:8000'

  const getDatos = async () => {
    const { data } = await axios.get(`${URL}/get-menu`)
    setData(data);
  }

  useEffect(() => {
    getDatos()
  })


  return (
    <section className='container'>
      <div className="row justify-content-around">
          {
          datos.map(res =>
            <div className="card bg-transparent card-style mb-3 mt-3 col-sm-4 col-xs-4 p-0" key={res._id}>
              <CardsMenu nombre={res.nombre} estado={res.estado} precio={res.precio} detalle={res.detalle} categoria={res.categoria} img={res.img} id={res._id} user={user} />
            </div>
          )
          }  
      </div>  
    </section>
  )
}

export default ContenidoMenu