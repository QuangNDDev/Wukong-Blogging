import { Link } from "react-router-dom";

function PostInfo({ date = "", author = "", to = "/" }) {
  return (
    <div className="flex items-center gap-2 ml-auto text-sm font-semibold text-inherit mb-2">
      <span>{date}</span>
      <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
      <Link to={to}>
        <span>{author}</span>
      </Link>
    </div>
  );
}

export default PostInfo;
