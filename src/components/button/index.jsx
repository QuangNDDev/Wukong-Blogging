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
    default:
      kindClass = "text-white bg-primary";
      break;
  }

  const disabledClass = disable ? "opacity-50 cursor-wait" : "cursor-pointer";

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
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  height: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Button;
