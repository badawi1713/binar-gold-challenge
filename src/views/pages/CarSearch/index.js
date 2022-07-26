import CarsContext from "context/cars/CarsContext";
import { useContext, useEffect } from "react";
import {
  CarList,
  // CarSearchHeader,
  CarSearchModal,
  Footer,
  Header,
} from "views/components";

const CarSearch = () => {
  const { getCars } = useContext(CarsContext);

  useEffect(() => {
    getCars();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Header />
      {/* <CarSearchHeader /> */}
      <CarSearchModal />
      <CarList />
      <Footer />
    </main>
  );
};

export default CarSearch;
