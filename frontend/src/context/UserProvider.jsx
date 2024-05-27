import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { isValidToken } from "../utils/validateToken";
import { Spinner } from "react-bootstrap";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  const checkUserInfo = async () => {
    let userInfo = null;

    if (localStorage.getItem("userInfo")) {
      userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let isValid = await isValidToken(userInfo.token);
      userInfo = isValid ? userInfo : null;
    }

    setUserInfo(userInfo);
    setUserLoading(false);
  };

  useEffect(() => {
    //setTimeout(checkUserInfo, 100000);
    checkUserInfo();
  }, []);
  return (
    <userContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {userLoading ? (
        <Spinner
          animation="border"
          variant="secondary"
          style={{
            width: "10rem",
            height: "10rem",
            position: "absolute",
            left: "45%",
          }}
        />
      ) : (
        children
      )}
    </userContext.Provider>
  );
};

export default UserProvider;
