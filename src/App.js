import { BrowserRouter } from "react-router-dom";
import Routers from "routers/Routers";
import { Navbar } from "views/components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routers />
    </BrowserRouter>
  );
};

export default App;
