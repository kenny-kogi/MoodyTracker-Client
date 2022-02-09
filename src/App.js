import { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./context/appcontext";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";
import LogMood from "./components/LogMood/LogMood";
import Moods from "./components/Moods/Moods";

const App = () => {
  let navigate = useNavigate;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    console.log(data);
    setIsLoggedIn(true);
    setUser(data.user);
    console.log("handling login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  const handleClick = () => {
    console.log("handling logout somehow");

    axios
      .delete("http://localhost:3001/user/logout", { withCredentials: true })
      .then((response) => {
        handleLogout();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const loginStatus = () => {
    axios
      .get("http://localhost:3001/user/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  useEffect(() => {
    loginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AppContext.Provider
        value={{
          isLoggedIn,
          handleLogout,
          handleLogin,
          user,
          handleClick,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/mood/record" element={<LogMood />} />
            <Route exact path="/moods/:id" element={<Moods />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};
export default App;
