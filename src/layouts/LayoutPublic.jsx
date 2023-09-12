import { Outlet } from "react-router-dom";
import Navbar from "../componentes/header/Navbar.jsx";

import Banner from "../componentes/slider/Slider.jsx";
const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />

      <footer className="bg-black text-white text-center text-sm mt-2 p-2">
        Creado por Paola Luna
      </footer>
    </div>
  );
};

export default LayoutPublic;

//Este componente sirve para poder poner elementos iguales en las diferentes rutas y así no tener que repetirlo en cada componente
{
  /*    <Slider /> */
}
