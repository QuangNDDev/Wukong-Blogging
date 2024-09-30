import { Link } from "react-router-dom";

function PostInfo({ date = "", author = "", color = "primary", to = "/" }) {
  return (
    <div className="flex items-center gap-2 ml-auto text-sm font-semibold text-inherit">
      <span>{date}</span>
      <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
      <span>{author}</span>
    </div>
  );
}

export default PostInfo;
