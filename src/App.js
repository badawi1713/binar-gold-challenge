import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollToTop } from "helpers/utils";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "routers/Routers";
import { Navbar } from "views/components";
const App = () => {
  useEffect(() => {
    AOS.init();
    let samt = 0;
    window.addEventListener("scroll", function () {
      samt <= 10 ? samt++ : AOS.refresh();
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routers />
    </BrowserRouter>
  );
};

export default App;
