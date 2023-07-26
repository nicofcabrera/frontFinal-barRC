import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';
import Inicio from './Components/Inicio/Inicio';
import { useState } from 'react';
import Validate from './Components/Validate/Validate';
import ValidatePanel from './Components/ValidatePanel/ValidatePanel';
import Panel from './Components/Panel/Panel';
import Menu from './Components/Menu/Menu';



function App() {

  const [user1, setUser1] = useState();
  const URL = 'https://backfinal-barrc-production.up.railway.app'
  const [comanda, setComanda] = useState()

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='login' element={<Login user1={user1} setUser1={setUser1} />} />
          <Route path='registro' element={<Registro />} />
          <Route path='*' element={<ErrorPage />} />
          <Route element={<Validate permiso={user1} />}>
            <Route path='menu' element={<Menu user={user1} setUser1={setUser1} setComanda={setComanda} urlBackend={URL} />} />           
          </Route>
          <Route element={<ValidatePanel usuario={user1} />}>
            <Route path='panel' element={<Panel urlBackend={URL} comanda={comanda} user={user1} />} />
         </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
