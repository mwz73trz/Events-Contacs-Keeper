import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Events from "./routes/events";
import Contacts from "./routes/contacts";
import UserContext from "./contexts/UserContext";
import { getLoggedInUser, login } from "./api/UserAPI";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  console.log("USER: ", user);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== "null") {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    };

    if (!user) {
      getUser();
    }
  }, [user]);

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };

    let response = await login(userObject);
    let data = await response.json();
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user: user, setUser: handleLogin }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
              }
            >
              <Route path="/events" element={<Events />} />
              <Route path="/contacts" element={<Contacts />} />
            </Route>
            <Route
              path="/login"
              element={
                <LoginPage
                  isLoggedIn={isLoggedIn}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              }
            />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
