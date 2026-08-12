import { useState } from "react";
import AuthContext from "./AuthContext";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

//clearance
function App() {
  const [user, setUser] = useState();
  const login = () => {
    setUser({
      name: "jonny",
      email: "jonny@gmail.com",
      role: "Admin",
      age: 22,
    });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ login, logout, user }}>
        <Navbar />
        <Dashboard />
      </AuthContext.Provider>
    </>
  );
}
export default App;
