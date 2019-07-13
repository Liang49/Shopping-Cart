import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  }

  render() {
    return (
      <nav className="nav-wrapper">
        <div className="left">
          <Link to="/" className="brand-logo">
            Shopping
          </Link>
          <ul className="right">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
