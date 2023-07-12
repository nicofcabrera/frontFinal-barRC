import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';
import Inicio from './Components/Inicio/Inicio';
import { useState } from 'react';
import Validate from './Components/Validate/Validate';
import ValidatePanel from './Components/ValidatePanel/ValidatePanel';
import Panel from './Components/Panel/Panel';



function App() {

  const [user1, setUser1] = useState();
  const URL = 'http://localhost:8000'
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='login' element={<Login user1={user1} setUser1={setUser1} />} />
          <Route path='registro' element={<Registro />} />
          <Route path='*' element={<ErrorPage />} />
          <Route element={<Validate permiso={user1} />}>
            <Route path='menu' element={<Home />} />           
          </Route>
          <Route element={<ValidatePanel usuario={user1} />}>
            <Route path='panel' element={<Panel urlBackend={URL} />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
