import { FaStar } from "react-icons/fa";

const createStars = (item) => {
  let stars = [];

  // Outer loop to create parent
  for (let i = 0; i < item; i++) {
    stars.push(<FaStar className=" text-warning" fontSize={16} />);
  }
  return stars;
};

export { createStars };
