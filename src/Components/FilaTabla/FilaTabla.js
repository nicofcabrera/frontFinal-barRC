import axios from 'axios'
import React from 'react'
// import { useNavigate } from 'react-router-dom';

const FilaTabla = ({ nombre, email, estado2, id2, rol, key1, urlBackend }) => {
  
  // const navigate = useNavigate()

  const activeUsers = async () => {
    let confirma = window.confirm('Desea Activar al Usuario?');
    if (confirma) {
      await axios.patch(`${urlBackend}/patch-users`, { id: id2, newEstado: 'Activar' });
      // navigate('/menu')
    }
  }

    const inactiveUsers = async () => {
    let confirma = window.confirm('Desea desactivar al Usuario?');
    if (confirma) {
      await axios.patch(`${urlBackend}/patch-users`, { id: id2, newEstado: 'Pendiente' });
      // navigate('/menu')
    }
  }

    const deleteUsers = async () => {
    let confirma = window.confirm('Desea eliminar al Usuario?');
    if (confirma) {
      await axios.delete(`${urlBackend}/${id2}`);
      // navigate('/menu')
    }
  }

  return (
    <>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{estado2}</td>
      <td>{rol}</td>
      <td><button className='bg-success text-white border border-black rounded-circle button-fila' onClick={activeUsers}><i className="bi bi-check"></i></button></td>
      <td><button className='bg-warning text-white border border-black rounded-circle button-fila' onClick={inactiveUsers}><i className="bi bi-slash-circle"></i></button></td>
      <td><button className='bg-danger text-white border border-black rounded-circle button-fila' onClick={deleteUsers}><i className="bi bi-x-circle"></i></button></td>
    </>
  )
}

export default FilaTabla