import React, { useState } from 'react'
import './home.css';
import NavbarLanding from '../NavbarLanding/NavbarLanding';
import Sanguches from '../Sanguches/Sanguches';
import Burgers from '../Burgers/Burgers';
import Bebidas from '../Bebidas/Bebidas';
import Footer from '../Footer/Footer';
import CarritoBottom from '../CarritoBottom/CarritoBottom';
import { Link } from 'react-router-dom';


  
const Menu = ({user}) => {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [contador, setContador] = useState(0)
  const { data } = user
  
  return (
    <>
      <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
      <main className='pt-5 position-relative'>
        {
          user ? data.user.rol === 'admin' ? ( 
            <Link to='/panel' className='btn btn-info m-3'>Panel de control</Link>
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
          setContador={setContador}/>
      </main>
      <Footer />
    </>
  )
}

export default Menu