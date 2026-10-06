import { Routes, Route } from "react-router-dom";

import Sidebar from "../Componentes/Sidebar";

import Suporte from "../Pages/Suporte/Suporte";
import Agenda_psicologo from "../Pages/Agenda_Psicologo/Agenda_psicologos";
import Sobre_nos from "../Pages/Sobre_nos/Sobre_nos";
import Parceiros from "../Pages/Parceiros/Parceiros";
import Dashboardadm from "../Pages/Dashboardadm/Dashboardadm";

function AppRoutes() {
  return (
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
          path="/Agenda_psicologo"
          element={<Agenda_psicologo />}
        />

        <Route
          path="/Sobre_nos"
          element={<Sobre_nos />}
        />

        <Route
          path="/Parceiros"
          element={<Parceiros />}
        />

        <Route
          path="/dashboardadm"
          element={<Dashboardadm />}
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
