import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";
import UserProvider from "./component/UserProvider";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <UserProvider>
            <Route exact path="/" component={Login} />
            {/* <Route path="/home" component={Home} />
            <Route path="/about" component={About} /> */}
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/about" component={About} />
          </UserProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
