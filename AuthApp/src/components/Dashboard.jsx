import { useContext } from "react";
import AuthContext from "../AuthContext";
import Loginbutton from "./Loginbutton";
import Logoutbutton from "./Logoutbutton";
import UserProfile from "./UserProfile";
function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        {user ? (
          <div style={{ color: "#a50909" }}>
            <UserProfile /> <Logoutbutton />
          </div>
        ) : (
          <Loginbutton />
        )}
      </div>
    </>
  );
}

export default Dashboard;
