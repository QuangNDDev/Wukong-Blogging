import Button from "../button";

function Banner() {
  return (
    <div className="min-h-[520px] bg-linear-gradient py-[40px] mb-[60px]">
      <div className="container">
        <div className="flex items-start justify-between banner">
          <div className="banner-content max-w-[600px] text-white mt-20">
            <h1 className="banner-heading text-[48px] mb-5 text-left font-[700]">
              Wukong Blogging
            </h1>
            <p className="my-10 text-lg leading-7 text-left banner-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              officia in corrupti, iusto pariatur quo neque quasi possimus nam
              ab ipsa molestiae nobis assumenda eligendi doloremque omnis nisi
              non eum.
            </p>
            <div className="text-left">
              <Button kind="btn-banner" to="/sign-in" hasGradient={false}>
                Get Started
              </Button>
            </div>
          </div>
          <div className="banner-image">
            <img src="/home-banner.png" alt="home-banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
