//import React, { useContext } from "react";
//import { UserContext } from "../../../context/context";

const ChildUser = ({ count }) => {
  // const { user } = useContext(UserContext);

  return (
    <div>I am also a counter, but from the child componenet. {count} </div>
  );
};

export default ChildUser;
