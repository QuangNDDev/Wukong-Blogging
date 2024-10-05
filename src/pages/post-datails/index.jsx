import PostImage from "../../components/post-image";
import FeaturePostCategory from "../../components/feature-post-category";
import Heading from "../../components/heading";
import PostItem from "../../components/post-item";
import PostMeta from "../../components/post-meta";

const PostDetailsPage = () => {
  return (
    <div className="pb-24">
      <div className="container">
        <div className="flex justify-between items-center gap-10 my-10 max-w-full">
          <PostImage
            url="https://images.unsplash.com/photo-1649837867356-6c7ef7057f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            className="w-full max-w-[640px] h-[466px] rounded-[20px]"
          />
          <div className="grow">
            <FeaturePostCategory className="mb-6">
              Kiến thức
            </FeaturePostCategory>
            <h1 className="font-bold text-[36px] mb-7 post-heading leading-[1.4]">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h1>
            <PostMeta />
          </div>
        </div>
        <div className="max-w-2xl mx-auto my-20 post-content container">
          <div className="entry-content text-lg">
            <h2 className="text-2xl font-bold">Chương 1</h2>
            <p>
              Gastronomy atmosphere set aside. Slice butternut cooking home.
              Delicious romantic undisturbed raw platter will meld. Thick
              Skewers skillet natural, smoker soy sauce wait roux. slices Food
              qualities braise chicken cuts bowl through slices butternut snack.
              Tender meat juicy dinners. One-pot low heat plenty of time adobo
              fat raw soften fruit. sweet renders bone-in marrow richness
              kitchen, fricassee basted pork shoulder. Delicious butternut
              squash hunk. Flavor centerpiece plate, delicious ribs bone-in
              meat, excess chef end. sweet effortlessly pork, low heat smoker
              soy sauce flavor meat, rice fruit fruit. Romantic
              fall-off-the-bone butternut chuck rice burgers. renders aromatic
              enjoyment, then slices taco. Minutes undisturbed cuisine lunch
              magnificent mustard curry. Juicy share baking sheet pork. Meals
              ramen rarities selection, raw pastries richness magnificent
              atmosphere. Sweet soften dinners, cover mustard infused skillet,
              Skewers on culinary experience.
            </p>
            <p>
              Juicy meatballs brisket `&apos;` baked shoulder. Juicy smoker soy
              sauce burgers brisket. polenta mustard hunk greens. Wine technique
              snack skewers chuck excess. Oil heat slowly. slices natural
              delicious, set aside magic tbsp skillet, bay leaves brown
              centerpiece. fruit soften edges frond slices onion snack pork
              steem on wines excess technique cup; Cover smoker soy sauce fruit
              snack. Sweet one-dozen scrape delicious, non sheet raw crunch
              mustard. Minutes clever slotted tongs scrape, brown steem
              undisturbed rice.
            </p>
            <p>
              Food qualities braise chicken cuts bowl through slices butternut
              snack. Tender meat juicy dinners. One-pot low heat plenty of time
              adobo fat raw soften fruit. sweet renders bone-in marrow richness
              kitchen, fricassee basted pork shoulder. Delicious butternut
              squash hunk. Flavor centerpiece plate, delicious ribs bone-in
              meat, excess chef end. sweet effortlessly pork, low heat smoker
              soy sauce flavor meat, rice fruit fruit. Romantic
              fall-off-the-bone butternut chuck rice burgers.
            </p>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2">
                Gastronomy atmosphere set aside. Slice butternut cooking home.
              </figcaption>
            </figure>
            <h2 className="text-2xl font-bold">Chương 2</h2>
            <p>
              Gastronomy atmosphere set aside. Slice butternut cooking home.
              Delicious romantic undisturbed raw platter will meld. Thick
              Skewers skillet natural, smoker soy sauce wait roux. slices Food
              qualities braise chicken cuts bowl through slices butternut snack.
              Tender meat juicy dinners. One-pot low heat plenty of time adobo
              fat raw soften fruit. sweet renders bone-in marrow richness
              kitchen, fricassee basted pork shoulder. Delicious butternut
              squash hunk. Flavor centerpiece plate, delicious ribs bone-in
              meat, excess chef end. sweet effortlessly pork, low heat smoker
              soy sauce flavor meat, rice fruit fruit. Romantic
              fall-off-the-bone butternut chuck rice burgers. renders aromatic
              enjoyment, then slices taco. Minutes undisturbed cuisine lunch
              magnificent mustard curry. Juicy share baking sheet pork. Meals
              ramen rarities selection, raw pastries richness magnificent
              atmosphere. Sweet soften dinners, cover mustard infused skillet,
              Skewers on culinary experience.
            </p>
          </div>
          <div className="mt-10 flex rounded-2xl bg-gray-200 author">
            <div className="flex-shrink-0 w-48 h-48 author-image rounded-l-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-5 author-content">
              <h3 className="font-bold text-xl author-name">Evondev</h3>
              <p className="text-sm author-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos non animi porro voluptates quibusdam optio nulla
                quis nihil ipsa error delectus temporibus nesciunt, nam officiis
                adipisci suscipit voluptate eum totam!
              </p>
            </div>
          </div>
        </div>
        <div className="post-related mt-20">
          <Heading>Bài viết liên quan</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 grid-layout grid-layout--primary">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
