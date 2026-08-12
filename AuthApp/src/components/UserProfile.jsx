import { useContext } from "react";
import AuthContext from "../AuthContext";
function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <p>name : {user.name}</p>
      <p>email:{user.email}</p>
    </>
  );
}

export default UserProfile;
