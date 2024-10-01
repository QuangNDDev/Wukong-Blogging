import { Link } from "react-router-dom";

function FeaturePostCategory({
  children,
  type = "primary",
  className = "",
  to = "/",
}) {
  return (
    <div
      className={`inline-block px-2 py-1 mb-2 text-xs font-semibold text-gray-600 ${
        type === "primary"
          ? "bg-[#F3EDFF]"
          : type === "secondary"
          ? "bg-white"
          : ""
      } rounded-lg ${className}`}
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </div>
  );
}

export default FeaturePostCategory;
