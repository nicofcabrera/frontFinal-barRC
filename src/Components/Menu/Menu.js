import React, { useState } from 'react'
import './home.css';
import NavbarLanding from '../NavbarLanding/NavbarLanding';
import Sanguches from '../Sanguches/Sanguches';
import Burgers from '../Burgers/Burgers';
import Bebidas from '../Bebidas/Bebidas';
import Footer from '../Footer/Footer';
import CarritoBottom from '../CarritoBottom/CarritoBottom';
import { Link } from 'react-router-dom';


  
const Menu = ({user,setComanda, setUser1}) => {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [contador, setContador] = useState(0)
  const { data } = user
  
  const getFecha = () => { 
    const fechita = new Date()
    const array = [fechita.getDate(), fechita.getMonth() + 1, fechita.getFullYear()]
    return array
  }

  const fecha = getFecha()

  return (
    <>
      <NavbarLanding title='Bar RC' user={user} setUser1={setUser1} linkTres={'Cerrar sesión'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'}  />
      <main className='pt-5 position-relative'>
        {
          user ? data.user.rol === 'admin' ? ( 
            <Link to='/panel' className='btn btn-dark m-3'>Panel de control</Link>
         ): false : false
        }
        <Sanguches
          title={'Sanguches'}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
        />
        <Burgers
          title={'Burgers'}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
        />
        <Bebidas
          title={'Bebidas'}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
        />
        <CarritoBottom
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
          setComanda={setComanda}
          user={user}
          fecha={fecha}
        />
      </main>
      <Footer />
    </>
  )
}

export default Menu