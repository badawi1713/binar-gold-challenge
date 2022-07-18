import {
  CarRent,
  Faq,
  Footer,
  Header,
  Navbar,
  OurServices,
  SearchCarModal,
  Testimonials,
  WhyUs
} from "views/components";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Navbar />
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
