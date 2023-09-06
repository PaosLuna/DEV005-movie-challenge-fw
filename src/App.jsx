import { Route, Routes } from "react-router-dom";

import Estrenos from "./componentes/estrenos/Estrenos";
import TopTen from "./componentes/topTen/TopTen";
import Home from "./componentes/home/Home";
import LayoutPublic from "./layouts/LayoutPublic";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route element={<Home />} path="/" />
          <Route element={<Estrenos />} path="/estrenos" />
          <Route element={<TopTen />} path="/top" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
