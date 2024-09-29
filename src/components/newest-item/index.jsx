const PostNewestItem = () => {
  return (
    <div className="flex items-center gap-5 border-b border-gray-300 mb-7 pb-7 last:mb-0 last:pb-0 last:border-b-0">
      <div className="flex-shrink-0 w-[180px] h-[130px]">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="post-content">
        <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-gray-600 bg-white rounded-lg">
          Kiến thức
        </span>
        <h3 className="mb-2 text-base font-bold leading-6">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </h3>
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-600">
          <span className="post-time">Mar 23</span>
          <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
          <span className="post-author">Andiez Le</span>
        </div>
      </div>
    </div>
  );
};

export default PostNewestItem;
