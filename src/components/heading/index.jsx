const Heading = ({ className = "", children }) => {
  return (
    <div
      className={`relative mb-7 leading-9 font-semibold text-[28px] text-[#3A1097] ${className}`}
    >
      <span className="absolute top-0 left-0 w-[50px] h-[4px] bg-linear-gradient transform -translate-y-[calc(150%+3px)]" />
      <h2>{children}</h2>
    </div>
  );
};

export default Heading;
