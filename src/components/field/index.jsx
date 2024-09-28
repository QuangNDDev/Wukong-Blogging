import PropTypes from "prop-types";
function Field({ children }) {
  return (
    <div className="flex flex-col items-start gap-2.5 mb-6">{children}</div>
  );
}
Field.propTypes = {
  children: PropTypes.node,
};

export default Field;
