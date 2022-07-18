import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full navbar__container sticky left-0 top-0 z-20">
      <section className="container flex justify-between mx-auto px-4 py-6">
      <Logo />
      <ul className="hidden lg:flex items-center gap-8">
        <Link to="/#our-services">Our Services</Link>
        <Link to="#">Why Us</Link>
        <Link to="#">Testimonial</Link>
        <Link to="#">FAQ</Link>
        <Link to="#">Register</Link>
      </ul>
      </section>
    </nav>
  );
};

export default Navbar;
