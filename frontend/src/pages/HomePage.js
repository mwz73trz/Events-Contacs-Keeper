import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const App = ({ isLoggedIn, handleLogout }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  return (
    <div>
      <h1>Events and Contacts App</h1>
      {user && (
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/events">Events</Link> |{" "}
          <Link to="/contacts">Contacts</Link>
        </nav>
      )}
      {!isLoggedIn ? (
        <div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default App;
