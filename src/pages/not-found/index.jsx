import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-[100vh] flex items-center justify-center direc flex-col">
      <Link to={"/"} className="inline-block mb-10 logo">
        <img srcSet="/public/wukong-logo.png 2x" alt="wukong-blogging" />
      </Link>
      <h1 className="mb-10 text-6xl font-bold heading">Oops! Page not found</h1>
      <Link
        to={"/"}
        className="back inline-block px-[15px] py-[30px] text-white bg-primary rounded font-semibold text-base
        "
      >
        Back to home
      </Link>
    </div>
  );
}

export default NotFoundPage;
