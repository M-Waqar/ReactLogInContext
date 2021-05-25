import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "./UserProvider";

const Home = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(UserContext);
  return (
    <div>
      <h1>Home Page</h1>
      {user && (
        <div>
          <h4>Login User Is: {JSON.stringify(user, null, 2)}</h4>
          <button
            onClick={() => {
              dispatch({ type: "OUT" });
              history.push("/");
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
