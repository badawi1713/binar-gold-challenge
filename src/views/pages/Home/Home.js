import {
  CarRent,
  Faq,
  Footer,
  Header, OurServices,
  SearchCarModal,
  Testimonials,
  WhyUs
} from "views/components";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Header />
      <SearchCarModal />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <CarRent />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
