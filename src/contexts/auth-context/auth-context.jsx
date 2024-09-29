import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../../firebase/firebase-config";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
    return () => {
      setUserInfo();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth mush be used within AuthProvider");
  }
  return context;
}
export { AuthContextProvider, useAuth };
