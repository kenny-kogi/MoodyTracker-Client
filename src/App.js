import { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./context/appcontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";
import LogMood from "./components/LogMood/LogMood";
import Moods from "./components/Moods/Moods";
import Logout from "./components/Home/Logout/Logout";
import MoodsAnalysis from "./components/MoodsAnalysis/MoodsAnalysis";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    console.log(data);
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
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
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/mood/record" element={<LogMood />} />
            <Route exact path="/moods" element={<Moods />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/moods/analysis" element={<MoodsAnalysis />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};
export default App;
