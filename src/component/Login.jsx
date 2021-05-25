import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Externallogin } from "../FakeApi";
import { UserContext } from "./UserProvider";

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const login = async () => {
    const user = await Externallogin();
    dispatch({ type: "IN", payload: user });
    history.push("/home");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
