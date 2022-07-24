import React from "react";
import {
  CarCardDetails,
  CarSearchHeader,
  CarSearchModal,
  Footer,
} from "views/components";

const CarDetails = () => {
  return (
    <main>
      <CarSearchHeader />
      <CarSearchModal />
      <CarCardDetails />
      <Footer />
    </main>
  );
};

export default CarDetails;
