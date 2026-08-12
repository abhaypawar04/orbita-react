import { useState } from "react";
import AuthContext from "./AuthContext";
import Dashboard from "./components/Dashboard";

function App() {
  //user State
  const [user, setUser] = useState(null);

  // login logic
  const login = () => {
    setUser({ name: "jonny", email: "jonny@gmail.com" });
  };

  //logout logic
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ login, logout, user }}>
        <h1>authentication App</h1>
        <Dashboard />
      </AuthContext.Provider>
    </>
  );
}

export default App;
