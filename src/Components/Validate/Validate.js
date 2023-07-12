import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Validate = ({ permiso, redireccion = '/' }) => {

  if (!permiso) {
    return <Navigate to={redireccion} replace />
  }

  

  return (
   <Outlet />
  )
}

export default Validate