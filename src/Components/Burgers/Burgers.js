import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import TarjetasMenu from '../TarjetasMenu/TarjetasMenu';

const Burgers = ({title,allProducts, setAllProducts, total, setTotal, contador, setContador}) => {
  const [datos, setData] = useState([]);
  // const URL = 'http://localhost:8000/get-menu'
  const URL = 'https://backfinal-barrc-production.up.railway.app/'


  const getDatos = async () => {
    const { data } = await axios.get(`${URL}/get-menu`)
    let result = data.filter(res => res.categoria === 'burger')

    setData(result);
  }

    const addProducts = (product) => {
      if (allProducts.find(item => item._id === product._id)) {
        const products = allProducts.map(item => 
          item._id === product._id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
        
        setTotal(total + product.precio * product.cantidad)
        setContador(contador + product.cantidad)
        return setAllProducts([...products])
      } 
     setTotal(total + product.precio * product.cantidad)
     setContador(contador + product.cantidad)
     setAllProducts([...allProducts,product])
  }

  useEffect(() => {
    getDatos()
  },[])


  return (
    <section className='container mb-5' id={title}>
      <h2>{title}</h2>
      <div className="row justify-content-center justify-content-md-evenly gap-5 gap-md-4">
      {/* {
          datos.map(res => <TarjetasMenu categoriaProducto={res.categoria} nombreProducto={res.nombre} descripcionProducto={res.detalle} imgProducto={res.img} precioProducto={res.precio} />)    
      } */}
         {
          datos.map(product => (
            <article className="card card_menu_front p-0  position-relative" key={product._id}>
              <img src={product.img} className={"card-img-top"} alt={product.nombre} />
              <div className="card-body p-0">
                <h5 className="card-title p-2">{product.nombre}</h5>
                <p className="card-text p-1">{product.detalle}</p>
                <p className="card-text p-1 mb-5 text-center fw-bold">${product.precio}</p>
                <button className="btn btn-dark rounded-top-0 position-absolute bottom-0 w-100" onClick={() =>addProducts(product)}>Agregar</button>
              </div>
          </article>
          ))
        }
      </div>
    </section>
  )
}

export default Burgers