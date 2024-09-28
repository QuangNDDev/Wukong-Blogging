import PropTypes from "prop-types";
function Label({ htmlFor, children }) {
  return (
    <>
      <label
        className="text-base font-semibold cursor-pointer text-grayDark"
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </>
  );
}
Label.propsType = {
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Label;
