import { useLocation } from "react-router-dom";

const CarSearchHeader = () => {
  const url = useLocation();

  const { pathname } = url;

  console.log(pathname);

  return (
    <header className="bg-dark-blue-00 relative flex flex-col xl:block h-64 " />
  );
};

export default CarSearchHeader;
