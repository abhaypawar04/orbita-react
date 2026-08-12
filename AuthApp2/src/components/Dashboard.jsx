import { useContext } from "react";
import Userinfo from "./Userinfo";
import AuthContext from "../AuthContext";
import Logout from "./Logout";
import Login from "./Login";

function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <>
          <Userinfo /> <Logout />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Dashboard;
