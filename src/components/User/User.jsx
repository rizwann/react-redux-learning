import React, { useContext } from "react";
import { useSelector } from "react-redux";
//import { UserContext } from "../../context/context";
import ChildUser from "./ChildUser/ChildUser";

const User = () => {
  // const { user } = useContext(UserContext);
  const count = useSelector((state) => state.count);

  return (
    <div>
      User
      <p>I am a counter from another component {count}</p>
      <ChildUser count={count} />
    </div>
  );
};

export default User;
