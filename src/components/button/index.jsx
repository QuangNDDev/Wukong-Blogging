import { Link } from "react-router-dom";
import LoadingSpinner from "../loading";
import PropTypes from "prop-types";

function Button({
  type = "button",
  children,
  kind = "primary",
  height = "66px",
  onClick = () => {},
  disable = false,
  isLoading = false,
  to,
}) {
  let kindClass = "";

  switch (kind) {
    case "primary":
      kindClass = "text-white bg-primary";
      break;
    case "secondary":
      kindClass = "text-primary bg-white";
      break;
    case "ghost":
      kindClass = "text-primary bg-opacity-10 bg-primary";
      break;
    case "signup-header":
      kindClass = "max-w-[200px] ml-[20px] text-white";
      break;
    default:
      kindClass = "text-white bg-primary";
      break;
  }

  const disabledClass = disable ? "opacity-50 cursor-wait" : "cursor-pointer";

  if (to !== "" && typeof to === "string") {
    return (
      <Link to={to}>
        <button
          className={`cursor-pointer w-signup mx-auto bg-linear-gradient px-6 font-semibold text-[16px] rounded-lg flex justify-center items-center ${kindClass} ${disabledClass}`}
          style={{ height }}
          type={type}
          onClick={onClick}
          disabled={disable}
        >
          {isLoading ? <LoadingSpinner size="25" /> : children}
        </button>
      </Link>
    );
  }
  return (
    <button
      className={`cursor-pointer w-signup mx-auto bg-linear-gradient px-6 font-semibold text-[16px] rounded-lg flex justify-center items-center ${kindClass} ${disabledClass}`}
      style={{ height }}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {isLoading ? <LoadingSpinner size="25" /> : children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Button;
