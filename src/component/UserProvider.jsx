import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const reducer = (user, action) => {
  switch (action.type) {
    case "IN":
      user = action.payload;
      return user;
    case "OUT":
      user = null;
      return user;
    default:
      return user;
  }
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, null);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
