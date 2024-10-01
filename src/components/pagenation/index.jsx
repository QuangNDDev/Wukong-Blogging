const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="flex items-center justify-center w-10 h-10 transition-all cursor-pointer hover:bg-black hover:text-white hover:scale-125 hover:font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </span>
      <ul className="flex items-center gap-2 pagination-list">
        <li className="flex items-center justify-center w-10 h-10 font-medium transition-all cursor-pointer pagination-item hover:bg-black hover:text-white hover:font-semibold hover:scale-125">
          1
        </li>
        <li className="flex items-center justify-center w-10 h-10 font-medium transition-all cursor-pointer pagination-item hover:bg-black hover:text-white hover:font-semibold hover:scale-125">
          2
        </li>
        <li className="flex items-center justify-center w-10 h-10 font-medium transition-all cursor-pointer pagination-item hover:bg-black hover:text-white hover:font-semibold hover:scale-125">
          3
        </li>
        <li className="flex items-center justify-center w-10 h-10 font-medium transition-all cursor-pointer pagination-item hover:bg-black hover:text-white hover:font-semibold hover:scale-125">
          4
        </li>
        <li className="flex items-center justify-center w-10 h-10 font-medium transition-all cursor-pointer pagination-item hover:bg-black hover:text-white hover:font-semibold hover:scale-125">
          5
        </li>
      </ul>
      <span className="flex items-center justify-center w-10 h-10 transition-all cursor-pointer hover:bg-black hover:text-white hover:scale-125 hover:font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
};

export default Pagination;
