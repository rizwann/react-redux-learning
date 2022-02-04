import React, { useContext } from "react";
import { UserContext } from "../../context/context";

const UserFrom = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return <input type="text" onChange={handleChange} value={user} />;
};

export default UserFrom;
