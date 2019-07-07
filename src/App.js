import React from "react";
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
      <div>
        11
        <NavBar />
      </div>
    );
  }
}
export default App;
