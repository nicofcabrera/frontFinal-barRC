import React from 'react'
import ContenidoMenu from '../ContenidoMenu/ContenidoMenu'
import TablaUsers from '../TablaUsers/TablaUsers'
import ButtonPostMenu from '../ButtonPostMenu/ButtonPostMenu'
import TablaPedidos from '../TablaPedidos/TablaPedidos'
import { Link } from 'react-router-dom'

const Panel = ({urlBackend, comanda, user}) => {
  



  return (
    <>  
      <h1 className='text-center mt-3'>Panel de control</h1>
      <Link to='/menu' className='btn btn-info'>Ver Menu</Link>
      <div className='container'>
        <h2>Usuarios</h2>
        <TablaUsers urlBackend={urlBackend} />
        <h2>Pedidos</h2>
        <TablaPedidos user={user} />
        <h2>Menu</h2>
        {/* ver en armar un componente para el poste */}
        <ButtonPostMenu/>
        <ContenidoMenu />
      </div>

    </>
  )
}

export default Panel