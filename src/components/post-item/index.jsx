import PostTitle from "../post-title";

const PostItem = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full h-[202px] mb-5">
        <img
          src="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="inline-block px-2 py-1 mb-4 text-gray-600 text-sm font-semibold bg-[#f3edff] rounded-lg">
        Kiến thức
      </div>
      <PostTitle className="mb-3">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <div className="flex items-center gap-3 mt-auto text-sm font-semibold text-gray-600">
        <span>Mar 23</span>
        <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
        <span>Andiez Le</span>
      </div>
    </div>
  );
};

export default PostItem;
