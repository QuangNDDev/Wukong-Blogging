import { useDropdown } from "../dropdown-context";

const Option = ({ onClick, children }) => {
  const { setShow } = useDropdown();

  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };

  return (
    <div
      className="flex items-center justify-between px-5 py-4 text-sm transition-all cursor-pointer hover:text-primary"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Option;
