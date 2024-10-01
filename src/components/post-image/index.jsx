import { Link } from "react-router-dom";

function PostImage({ url = "", alt = "", className = "", to = null }) {
  if (to)
    return (
      <Link to={to} style={{ display: "block" }}>
        <div className="w-full h-full rounded-lg">
          <img
            src={url}
            alt={alt}
            loading="lazy"
            className={`${className} w-full h-full object-cover rounded-lg`}
          />
        </div>
      </Link>
    );

  return (
    <div className="w-full h-full rounded-lg">
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className={`${className} w-full h-full object-cover rounded-lg`}
      />
    </div>
  );
}

export default PostImage;
