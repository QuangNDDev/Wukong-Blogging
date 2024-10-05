const PostMeta = ({
  date = "Mar 23",
  authorName = "Andiez Le",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-3 text-sm font-semibold ${className}`}
    >
      <span className="post-time">{date}</span>
      <span className="post-dot inline-block w-1 h-1 bg-current rounded-full"></span>
      <span className="post-author">{authorName}</span>
    </div>
  );
};

export default PostMeta;
