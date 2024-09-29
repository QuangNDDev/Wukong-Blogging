import FeatureItem from "../feature-item";
import Heading from "../heading";

function Feature() {
  return (
    <div className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </div>
    </div>
  );
}

export default Feature;
