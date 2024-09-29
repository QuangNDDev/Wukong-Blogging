import PropTypes from "prop-types";
function AuthenLayout({ children }) {
  return (
    <div className="min-h-[100vh] p-10">
      <div className="container">
        <img
          srcSet="/wukong-logo.png 2x"
          alt="wukong-blogging"
          className="mx-auto"
        />
        <h1 className="text-center text-primary text-[40px] font-semibold my-[52px]">
          Wukong Blogging
        </h1>
        {children}
      </div>
    </div>
  );
}
AuthenLayout.propsType = {
  children: PropTypes.node.isRequired,
};
export default AuthenLayout;
