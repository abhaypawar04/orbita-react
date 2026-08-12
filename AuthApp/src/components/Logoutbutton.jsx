import AuthContext from "../AuthContext";
import { useContext } from "react";
function Logoutbutton() {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <button onClick={logout}>LOGOUT</button>
    </>
  );
}

export default Logoutbutton;
