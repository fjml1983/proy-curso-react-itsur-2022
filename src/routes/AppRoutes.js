import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "../components/contacto/Contacto";
import Inicio from "../components/inicio/Inicio";
import Layout from "../components/Layout";
import NoPage from "../components/NoPage";
import ListaPeliculas from "../components/peliculas/ListaPeliculas";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="inicio" element={<Inicio />} />
          <Route path="peliculas" element={<ListaPeliculas />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes