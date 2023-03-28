import React, { useContext } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Front/Home';
import Login from '../pages/Back/Login';
import Admin from '../pages/Back/Admin';
import ListAdmin from '../pages/Back/Admin/ListAdmin';
import NewAdmin from '../pages/Back/Admin/NewAdmin';
import AdminSingle from '../pages/Back/Admin/AdminSingle';
import ListOrf from '../pages/Back/AdminOrf/ListOrf';
import NewOrf from '../pages/Back/AdminOrf/NewOrf';
import OrfSingle from '../pages/Back/AdminOrf/OrfSingle';
import Perfil from '../pages/Back/Perfil';
import BackOrfa from '../pages/BackOrf/';
import { AuthContext } from '../contexts/AuthContext';
import { administradorInputs, orfanatoInputs } from '../formSource/formSource';
import ListCrianca from '../pages/BackOrf/Crianca/ListCrianca';
import NewCrianca from '../pages/BackOrf/Crianca/NewCrianca';
import ListActividade from '../pages/BackOrf/Actividade/ListActividade';
import NewActividade from '../pages/BackOrf/Actividade/NewActividade';
import Orfanatos from '../pages/Front/Orfanatos';
import SingleOrfanato from '../pages/Front/Orfanatos/SingleOrfanato';
import Adopcao from '../pages/Front/Adpocao';
import Doacao from '../pages/Front/Doacao';
import Actividades from '../pages/Front/Actividades';

function RoutesApp() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />; 
  };

  return (
    <BrowserRouter>
        <Fragment>
           <Routes>
            <Route path="/">
              <Route index element={<Home />} /> 
              <Route path="home" element={<Home />} />
              <Route path="orfanatos">
                <Route index element={<Orfanatos />} />
                <Route path=":orfanato" element={<SingleOrfanato />} />
              </Route>
              <Route path="actividades">
                <Route index element={<Actividades />} />
                
              </Route>
              <Route path="adopcao" element={<Adopcao />} />
              <Route path="doacao" element={<Doacao />} />
              <Route path="login" element={<Login />} />
              <Route path="backorf">
                <Route index element={<BackOrfa /> } />
                <Route path="crianca" element={<RequireAuth><ListCrianca /></RequireAuth> } />
                <Route path="newcrianca" element={<RequireAuth><NewCrianca /></RequireAuth> } />
                <Route path="actividade" element={<RequireAuth><ListActividade /></RequireAuth> } />
                <Route path="newactividade" element={<RequireAuth><NewActividade /></RequireAuth> } />
              </Route>
              <Route index element={<Admin />} />
              <Route path="admin">
                <Route index element={<RequireAuth><Admin /></RequireAuth>} />
                <Route path="administradores">
                  <Route index element={<RequireAuth><ListAdmin /></RequireAuth>} />
                  <Route path=":adminId" element={<RequireAuth><AdminSingle /></RequireAuth>} />
                  <Route path="newAdmin" element={<NewAdmin inputs={administradorInputs} title="Adicionar novo administrador"/>} />
                </Route> 
                <Route path='orfanatos'>
                  <Route index element={<RequireAuth><ListOrf /></RequireAuth>}/>
                  <Route path="newOrf" element={<RequireAuth><NewOrf inputs={orfanatoInputs} title="Adicionar novo orfanato"/></RequireAuth>}/>
                  <Route path=":orfId" element={<RequireAuth><OrfSingle /></RequireAuth>}/>
                </Route>
                <Route path='perfil' element={<RequireAuth><Perfil /></RequireAuth>}/>
              </Route>
            </Route> 
            </Routes> 
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp;