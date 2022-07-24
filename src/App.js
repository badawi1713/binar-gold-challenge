import { ScrollToTop } from "helpers/utils";
import { BrowserRouter } from "react-router-dom";
import Routers from "routers/Routers";
import { Navbar } from "views/components";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routers />
    </BrowserRouter>
  );
};

export default App;
