import { Route, Routes } from "react-router-dom";
import { Home } from "views/pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Routers;
