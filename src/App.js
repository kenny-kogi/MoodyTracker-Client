import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  const loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
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
  });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              <Home
                {...props}
                loggedInStatus={isLoggedIn}
                handleLogout={handleLogout}
              />;
            }}
          />

          <Route
            exact
            path="/login"
            render={(props) => {
              <Login
                {...props}
                handleLogin={handleLogin}
                loggedInStatus={isLoggedIn}
              />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={(props) => {
              <Signup
                {...props}
                handleLogin={handleLogin}
                loggedInStatus={isLoggedIn}
              />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
