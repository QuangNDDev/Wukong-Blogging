import Heading from "../heading";
import PostNewestItem from "../newest-item";
import PostNewestLarge from "../newest-large";

function Newest() {
  return (
    <div className="home-block">
      <div className="container">
        <Heading>Latest posts</Heading>
        <div className="grid items-start grid-cols-2 gap-10 mb-10 layout">
          <PostNewestLarge />
          <div className="sidebar p-[28px_20px] bg-[#f3edff] rounded-lg">
            <PostNewestItem />
            <PostNewestItem />
            <PostNewestItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newest;
