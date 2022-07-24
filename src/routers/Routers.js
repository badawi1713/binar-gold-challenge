import { Route, Routes } from "react-router-dom";
import { CarDetails, CarSearch, Home } from "views/pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cari-mobil" element={<CarSearch />}></Route>
      <Route path="/detail-mobil/:id" element={<CarDetails />}></Route>
    </Routes>
  );
};

export default Routers;
