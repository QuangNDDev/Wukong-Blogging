const PostNewestLarge = () => {
  return (
    <div className="post-newest-large">
      <div className="post-image mb-4 h-[433px]">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="post-category inline-block px-3 py-2 mb-4 text-sm font-semibold text-[#6b6b6b] bg-[#f3edff] rounded-lg">
        Kiến thức
      </div>
      <h3 className="mb-3 text-lg font-bold leading-6 post-title">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </h3>
      <div className="flex items-center gap-3 text-sm font-semibold post-info">
        <span className="post-time">Mar 23</span>
        <span className="w-1 h-1 bg-current rounded-full post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </div>
  );
};

export default PostNewestLarge;
