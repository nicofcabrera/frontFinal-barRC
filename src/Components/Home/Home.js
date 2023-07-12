import React, { useEffect, useState } from 'react'
import './home.css';
import NavbarLanding from '../../Components/NavbarLanding/NavbarLanding';
import Sanguches from '../Sanguches/Sanguches';
import Burgers from '../Burgers/Burgers';
import Bebidas from '../Bebidas/Bebidas';
import Footer from '../Footer/Footer';
import CarritoBottom from '../CarritoBottom/CarritoBottom';
import { Link } from 'react-router-dom';


  
const Home = () => {

  

  const ingresoMenu = () => {
    // const value = window.localStorage.getItem('role')
    // if (value) {
    //   return alert('Tenes acceso')
    // } else {
    //   return alert('No tenes acceso')
    //   console.log(res);
    //   window.location.href = 'http://localhost:3000/login'
    // }
  }

   useEffect(() => {
    ingresoMenu()
  },[])

  // ingresoMenu()

  // alert('Hola')

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [contador, setContador] = useState(0)


  return (
    <>
      <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
      <main className='pt-5 position-relative'>
        <Link to='/panel' className='btn btn-info'>Panel</Link>
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

export default Home