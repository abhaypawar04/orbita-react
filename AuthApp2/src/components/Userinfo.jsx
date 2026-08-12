import { useContext } from "react";
import AuthContext from "../AuthContext";

function Userinfo() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <p>welcome {user.name} 👋</p>
      <p>email: {user.email}</p>
      <p>role: {user.role}</p>
      <p>age:{user.age}</p>
    </>
  );
}

export default Userinfo;
