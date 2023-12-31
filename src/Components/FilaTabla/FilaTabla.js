import axios from 'axios'
import React from 'react'

const FilaTabla = ({ nombre, email, estado2, id2, rol, key1, urlBackend }) => {
  
    const deleteUsers = async () => {
    let confirma = window.confirm('Desea eliminar al Usuario?');
    if (confirma) {
      await axios.delete(`${urlBackend}/${id2}`);
    }
  }
  
  const addAdmin = () => {
    let confirma = window.confirm('¿Agregar como ADMINISTRADOR?');
    if (confirma) {
     axios.patch(`${urlBackend}/role-users`, {id: id2, newRole: 'admin'}) 
    }
  }

  return (
    <>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{estado2}</td>
      <td>{rol}</td>
      {
        rol !== 'admin' ? (
          <td><button className='bg-danger text-white border border-black rounded-circle button-fila' onClick={deleteUsers}><i className="bi bi-x-circle"></i></button></td>
        ) : false
      }
      <td><button className={rol === 'admin' ? `bg-dark text-warning border border-black rounded-circle button-fila` : 'button-fila btn'} disabled aria-disabled="true"><i className={rol === 'admin' ? `bi bi-star-fill` : `bi bi-person`}></i></button></td>
      {
        rol === 'user' ? 
          (
            <td><button title='Agregar como administrador' className='bg-dark text-white border border-black rounded-circle button-fila' onClick={addAdmin}><i className='bi bi-star-fill'></i></button></td>
          ) : false
      }
    </>
  )
}

export default FilaTabla