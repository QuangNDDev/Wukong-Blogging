import { DropdownProvider } from "../dropdown-context";

const Dropdown = ({ children, value }) => {
  return (
    <DropdownProvider value={value}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
