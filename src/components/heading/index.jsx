const Heading = ({ className = "", children }) => {
  return (
    <h2
      className={`text-[28px] text-[#3A1097] font-semibold mb-[30px] relative ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
