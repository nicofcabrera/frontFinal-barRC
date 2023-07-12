import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ValidatePanel = ({ usuario, redireccion = '/' }) => {
  
  
  if (usuario) {
    const { data } = usuario
    if (data.user.rol === 'admin') {      
      return <Outlet /> 
    }
  } 
  
  return (
    <Navigate to={redireccion} replace />
  )
}

export default ValidatePanel