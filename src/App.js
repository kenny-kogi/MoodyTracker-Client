import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";
import LogMood from "./components/LogMood/LogMood";
import Moods from "./components/Moods/Moods";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <Route
            exact
            path="/mood/record"
            element={<LogMood loggedInStatus={isLoggedIn} user={user} />}
          />

          <Route exact path="/moods" element={<Moods />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
