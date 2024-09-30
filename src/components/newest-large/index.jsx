import FeaturePostCategory from "../feature-post-category";
import PostTitle from "../post-title";

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
      <FeaturePostCategory className="mb-[10px]">Kiến thức</FeaturePostCategory>
      <PostTitle size="big" className="mb-[10px]">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <div className="flex items-center gap-3 text-sm font-semibold post-info">
        <span className="post-time">Mar 23</span>
        <span className="w-1 h-1 bg-current rounded-full post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </div>
  );
};

export default PostNewestLarge;
