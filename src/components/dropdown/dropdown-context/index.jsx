import { createContext, useContext, useState } from "react";
const DropdownContext = createContext();

function DropdownProvider({ children }) {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  const values = { show, setShow, toggle };
  return (
    <DropdownContext.Provider value={values}>
      {children}
    </DropdownContext.Provider>
  );
}

function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { useDropdown, DropdownProvider };
