import { useDropdown } from "../dropdown-context";

const Option = ({ onClick, children }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-4 cursor-pointer flex items-center justify-between border border-b border-gray-100 rounded hover:bg-gray-100"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
export default Option;
