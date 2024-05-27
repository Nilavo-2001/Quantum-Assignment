import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    let userInfo = null;
    if (localStorage.getItem("userInfo"))
      userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);
    setUserLoading(false);
  }, []);
  return (
    <userContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {!userLoading && children}
    </userContext.Provider>
  );
};

export default UserProvider;
