import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";
import TestHome from "./components/TestHome";

const App = () => {
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
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home loggedInStatus={isLoggedIn} handleLogout={handleLogout} />
            }
          />

          <Route
            exact
            path="/login"
            element={
              <Login handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Signup handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
