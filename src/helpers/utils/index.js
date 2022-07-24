import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const createStars = (item) => {
  let stars = [];

  // Outer loop to create parent
  for (let i = 0; i < item; i++) {
    stars.push(<FaStar key={i} className=" text-warning" fontSize={16} />);
  }
  return stars;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export { createStars, ScrollToTop };

