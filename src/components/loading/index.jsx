import PropTypes from "prop-types";
const LoadingSpinner = ({ size = "10", borderSize = "2" }) => {
  return (
    <div
      className={`inline-block border-${borderSize} border-white border-t-transparent border-b-transparent rounded-full animate-spin`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${borderSize}px`,
      }}
    ></div>
  );
};
LoadingSpinner.PropTypes = {
  size: PropTypes.string,
  borderSize: PropTypes.string,
};
export default LoadingSpinner;
