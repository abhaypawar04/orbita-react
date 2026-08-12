import { useContext } from "react";
import AuthContext from "../AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <button onClick={logout}>logout</button>
    </>
  );
}
export default Logout;
