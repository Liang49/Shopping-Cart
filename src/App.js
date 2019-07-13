import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/NavBar"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/NavBar" component={NavBar} />
        </Switch>
      </Router>
    );
  }
}
export default App;
