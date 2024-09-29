import { Link } from "react-router-dom";
import Button from "../button";
import { useAuth } from "../../contexts/auth-context/auth-context";

const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

function Header() {
  const { userInfo } = useAuth();
  const getLastName = (name) => {
    if (!name) return "";
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  };
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              srcSet="/wukong-logo.png 2x"
              alt="monkey-blogging"
              className="block max-w-[50px]"
            />
          </Link>
          <ul className="flex items-center gap-5 ml-10 font-semibold list-none">
            {menuLinks.map((item) => (
              <li key={item.title}>
                <Link to={item.url} className="text-xl">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Increased the space between search and Sign Up button */}
          <div className="search flex items-center relative border border-gray-300 rounded-lg max-w-[320px] w-full ml-auto px-5 py-[15px] mr-6">
            <input
              type="text"
              className="flex-1 pr-10 text-base font-medium border-none outline-none font-bold-[500]"
              placeholder="Search posts..."
            />
            <span className="absolute transform -translate-y-1/2 right-5 top-1/2">
              <svg
                width={18}
                height={17}
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          {/* Add margin-left to increase space */}
          {!userInfo ? (
            <Button
              kind="signup-header"
              height="56px"
              to={"/sign-up"}
              type="button"
            >
              Sign Up
            </Button>
          ) : (
            <div>
              <strong>Welcome, </strong>
              <span className="ml-1 text-base text-primary">
                {getLastName(userInfo?.displayName)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
