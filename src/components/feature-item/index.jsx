import FeaturePostCategory from "../feature-post-category";
import PostImage from "../post-image";
import PostInfo from "../post-info";
import PostTitle from "../post-title";

function FeatureItem() {
  return (
    <div className="relative w-full h-[169px] rounded-2xl lg:h-[272px]">
      <PostImage
        url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        alt="unsplash"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 rounded-2xl"></div>
      <div className="absolute inset-0 z-10 p-5 text-white">
        <div className="flex items-center justify-between mb-5">
          <FeaturePostCategory className="text-sm">
            Kiến thức
          </FeaturePostCategory>
          <PostInfo date="Mar 23" author="Andiez Le" />
        </div>
        <PostTitle size="big" className="text-shadow-lg">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
      </div>
    </div>
  );
}

export default FeatureItem;
