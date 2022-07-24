import {
  CarList,
  // CarSearchHeader,
  CarSearchModal,
  Footer,
  Header,
} from "views/components";

const CarSearch = () => {
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
