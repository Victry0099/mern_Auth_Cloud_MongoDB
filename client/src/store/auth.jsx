import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;


  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
 
  let isLoggedIn = !!token;

  // ? tackling logout functionality
  const LogoutUser = () => {
      setToken("");
      setUser("");
    return localStorage.removeItem("token");
    
  };

  // ? jwt Authentication - currently loggedin user data
  const userAuthentication = async () => {
    const userURL = "http://localhost:5000/api/auth/user";
    try {
        setIsLoading(true);
      const response = await fetch(userURL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
    }
    else{
        console.error("Error featching user data")
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };



  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`service front end error ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLs,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};



