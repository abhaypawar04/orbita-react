import AuthContext from "../AuthContext";
import { useContext } from "react";

function Loginbutton() {
  const { login } = useContext(AuthContext);
  return (
    <>
      <button onClick={login}>LOGIN</button>
    </>
  );
}

export default Loginbutton;
