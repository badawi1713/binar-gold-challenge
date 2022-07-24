import { Route, Routes } from "react-router-dom";
import { Home, CarSearch } from "views/pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cari-mobil" element={<CarSearch />}></Route>
    </Routes>
  );
};

export default Routers;
