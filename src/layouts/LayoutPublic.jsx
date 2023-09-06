import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Navbar.jsx";

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

      <footer>Probando Layout</footer>
    </div>
  );
};

export default LayoutPublic;

//Este componente sirve para poder poner elementos iguales en las diferentes rutas y así no tener que repetirlo en cada componente
