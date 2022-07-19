import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiTwitch,
  FiMail,
} from "react-icons/fi";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="container mx-auto mb-16 lg:mb-24 px-4">
      <div className="flex flex-col lg:flex-row items-baseline gap-4 lg:gap-20">
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-sm font-light">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
          <p className="text-sm font-light">binarcarrental@gmail.com</p>
          <p className="text-sm font-light">081-233-334-808</p>
        </div>
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-sm font-normal">Our Services</p>
          <p className="text-sm font-normal">Why Us</p>
          <p className="text-sm font-normal">Testimonial</p>
          <p className="text-sm font-normal">FAQ</p>
        </div>
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-sm font-light">Connect with Us</p>
          <div className="flex items-center gap-4">
            <div className="bg-blue-900 text-white p-2 rounded-full w-8 h-8">
              <FiFacebook />
            </div>
            <div className="bg-blue-900 text-white p-2 rounded-full w-8 h-8">
              <FiInstagram />
            </div>
            <div className="bg-blue-900 text-white p-2 rounded-full w-8 h-8">
              <FiTwitter />
            </div>
            <div className="bg-blue-900 text-white p-2 rounded-full w-8 h-8">
              <FiMail />
            </div>
            <div className="bg-blue-900 text-white p-2 rounded-full w-8 h-8">
              <FiTwitch />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-sm font-light">Copyright Binar 2022</p>
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
