import { useEffect, useState, Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser({})
  }

  const loginStatus = () => {
      axios.get('http://localhost:3001/logged_in', 
      {withCredentials: true}).then(
        response => {
            if (response.data.logged_in) {
              handleLogin(response)
            } else {
              handleLogout()
          }
        }
        ).catch(error => console.log('api errors:', error))      
  }


  useEffect(() => {
    loginStatus()
  }, [])

  return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}
export default App;
