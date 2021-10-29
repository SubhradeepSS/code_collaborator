import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Navbar from "./components/Navbar";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return <Navbar />;
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  } else {
    return <LoginButton />;
  }
};

export default App;
