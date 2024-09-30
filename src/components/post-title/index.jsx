import { Link } from "react-router-dom";

function PostTitle({ children, className = "", size = "normal", to = "/" }) {
  return (
    <h3
      className={`${
        size === "normal" ? "text-[18px]" : size === "big" ? "text-[22px]" : ""
      } font-semibold leading-normal ${className}`}
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </h3>
  );
}

export default PostTitle;
