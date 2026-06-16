import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

 const handleLogout = () => {
  setUser(null);
};

if (user) {
  return (
    <Dashboard
      user={user}
      onLogout={handleLogout}
    />
  );
}
  return (
    <>
      {showLogin ? (
        <Login
          setUser={setUser}
          setShowLogin={setShowLogin}
        />
      ) : (
        <Signup
          setShowLogin={setShowLogin}
        />
      )}
    </>
  );
}

export default App;