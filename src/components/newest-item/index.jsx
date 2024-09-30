import FeaturePostCategory from "../feature-post-category";
import PostInfo from "../post-info";
import PostTitle from "../post-title";

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
        <FeaturePostCategory className="mb-2" type="secondary">
          Kiến thức
        </FeaturePostCategory>
        <PostTitle>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <PostInfo author="Andiez Le" date="Mar 23" color="secondary" />
      </div>
    </div>
  );
};

export default PostNewestItem;
