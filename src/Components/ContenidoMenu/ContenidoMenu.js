import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardsMenu from '../CardsMenu/CardsMenu';

const ContenidoMenu = () => {

   const [datos, setData] = useState([]);

  const getDatos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-menu')
    setData(data);
  }
  // console.log(datos)
  

  useEffect(() => {
    getDatos()
  },[])


  return (
    <section className='container'>
      <div className="row justify-content-around">
          {
          datos.map(res =>
            <div className="card bg-transparent card-style mb-3 mt-3 col-sm-4 col-xs-4 p-0" key={res._id}>
              <CardsMenu nombre={res.nombre} estado={res.estado} precio={res.precio} detalle={res.detalle} categoria={res.categoria} img={res.img} id={res._id} />
            </div>
          )
          }  
      </div>  
    </section>
  )
}

export default ContenidoMenu