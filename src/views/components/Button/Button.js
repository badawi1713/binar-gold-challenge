import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { variant, color, children, size, ...nativeProps } = props;

  const colorVariants = (color) => {
    switch (color) {
      case "primary":
        return "btn-primary text-white";

      case "secondary":
        return "btn-secondary text-white";
      case "default":
        return "btn-default text-black";

      default:
        return "btn-default text-black";
    }
  };

  const buttonVariants = (variant) => {
    switch (variant) {
      case "outlined":
        return "text-white bg-transparent";

      case "contained":
        return "bg-inherit";

      case "button":
        return "bg-inherit";

      default:
        return "bg-inherit";
    }
  };

  return (
    <button
      className={` ${buttonVariants(
        variant
      )} ${colorVariants(color)} p-3 rounded-sm`}
      {...nativeProps}
    >
      <>{children || "BUTTON"}</>
    </button>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "default",
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
