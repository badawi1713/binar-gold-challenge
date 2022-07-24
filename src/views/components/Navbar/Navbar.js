import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FiMenu, FiX } from "react-icons/fi";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-dark-blue-00 sticky left-0 top-0 z-20">
        <section className="container flex items-center justify-between mx-auto px-4 py-6">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#our-services">Our Services</Link>
            <Link to="#">Why Us</Link>
            <Link to="#">Testimonial</Link>
            <Link to="#">FAQ</Link>
          </div>
          <button onClick={() => setIsOpen(true)} className="md:hidden w-6 h-6">
            <FiMenu fontSize={24} className="text-black hover:text-gray-600" />
          </button>
        </section>
      </nav>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
        <aside>
          <nav className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">BCR</h2>
              <button
                onClick={() => setIsOpen(false)}
              >
                <FiX fontSize={24} className="text-black hover:text-gray-600" />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <Link onClick={() => setIsOpen(false)} to="/#our-services">
                Our Services
              </Link>
              <Link onClick={() => setIsOpen(false)} to="#">
                Why Us
              </Link>
              <Link onClick={() => setIsOpen(false)} to="#">
                Testimonial
              </Link>
              <Link onClick={() => setIsOpen(false)} to="#">
                FAQ
              </Link>
              <Link onClick={() => setIsOpen(false)} to="#">
                Register
              </Link>
            </div>
          </nav>
        </aside>
      </Drawer>
    </>
  );
};

export default Navbar;
