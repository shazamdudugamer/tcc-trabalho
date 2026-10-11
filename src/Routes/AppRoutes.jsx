import { Routes, Route } from "react-router-dom";


import Sidebar from "../Componentes/Sidebar";



import AdminPsicologos from "../Pages/AdminPsicologos/AdminPsicologos";

import Verificacoes from "../Pages/Verificacoes/Verificacoes";

import Relatorios from "../Pages/Relatorios/Relatorios";

import Suporte from "../Pages/Suporte/Suporte";

import Agenda_psicologo from "../Pages/Agenda_Psicologo/Agenda_psicologos";

import Sobre_nos from "../Pages/Sobre_nos/Sobre_nos";

import Parceiros from "../Pages/Parceiros/Parceiros";

import Dashboardadm from "../Pages/Dashboardadm/Dashboardadm";

import Usuarias from "../Pages/Usuarias/Usuarias";

import MonitoramentoVendas from "../Pages/MonitoramentoVendas/MonitoramentoVendas";

import Configuracoes from "../Pages/Configuracoes/Configuracoes";




function AppRoutes(){


 return(

  <>


   <Sidebar />



   <Routes>


    <Route
     path="/"
     element={<div>Início</div>}
    />



    <Route
     path="/perfil"
     element={<div>Perfil</div>}
    />



    <Route
     path="/suporte"
     element={<Suporte />}
    />



    <Route
     path="/agenda-psicologo"
     element={<Agenda_psicologo />}
    />



    <Route
     path="/sobre-nos"
     element={<Sobre_nos />}
    />



    <Route
     path="/parceiros"
     element={<Parceiros />}
    />




    {/* ADMIN */}



    <Route
     path="/dashboardadm"
     element={<Dashboardadm />}
    />



    <Route
     path="/usuarias"
     element={<Usuarias />}
    />



    <Route
     path="/psicologos"
     element={<AdminPsicologos />}
    />



    <Route
     path="/verificacoes"
     element={<Verificacoes />}
    />



    <Route
     path="/monitoramento-vendas"
     element={<MonitoramentoVendas />}
    />



    <Route
     path="/relatorios"
     element={<Relatorios />}
    />



    <Route
     path="/configuracoes"
     element={<Configuracoes />}
    />



   </Routes>


  </>

 );

}


export default AppRoutes;