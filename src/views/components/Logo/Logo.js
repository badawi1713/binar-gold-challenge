import { Link } from "react-router-dom";
import "./Logo.css";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="logo" />
    </Link>
  );
};

export default Logo;
