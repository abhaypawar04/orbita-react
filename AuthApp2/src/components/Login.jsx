import { useContext } from "react";
import AuthContext from "../AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  return (
    <>
      <button onClick={login}> Login</button>
    </>
  );
}

export default Login;
