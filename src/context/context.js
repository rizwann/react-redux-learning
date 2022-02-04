import { createContext, useState } from "react";

const UserContext = createContext({
  user: "",
  setUser: () => {},
});

function ContextProvider({ children }) {
  const [user, setUser] = useState("Tiger");
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, ContextProvider };
