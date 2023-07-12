import axios from 'axios'
import React, {useEffect, useState} from 'react'
import FilaTabla from '../FilaTabla/FilaTabla'


const TablaUsers = ({ urlBackend }) => {
  
  const [datos, setData] = useState([]);

  const getDatos = async () => {
    const { data } = await axios.get(`${urlBackend}/get-users`)
    setData(data);
  }

  useEffect(() => {
    getDatos()
  })

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          {
            datos.map(e =>
              <tr key={e._id}>
                <FilaTabla key1={e._id} nombre={e.nombre} email={e.email} estado2={e.estado} id2={e._id} rol={e.rol} urlBackend={urlBackend} />
              </tr>
            )
          }
        </tbody>
    </table>
    </>
  )
}

export default TablaUsers
