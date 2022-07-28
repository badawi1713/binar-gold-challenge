import CarsContext from "context/cars/CarsContext";
import { useContext, useEffect } from "react";
import {
  CarList,
  // CarSearchHeader,
  CarSearchModal,
  Footer,
  Header
} from "views/components";

const CarSearch = () => {
  const { getCarList } = useContext(CarsContext);

  useEffect(() => {
    getCarList();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      {/* {showResults ? <CarSearchHeader /> : <Header />} */}
      <Header />
      <CarSearchModal />
      <CarList />
      <Footer />
    </main>
  );
};

export default CarSearch;
