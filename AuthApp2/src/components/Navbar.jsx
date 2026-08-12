import { useContext } from "react";
import AuthContext from "../AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h5>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </h5>
      <h3> hello {user ? user.name : "guest"}</h3>
    </>
  );
}

export default Navbar;
