import React from "react";
import auth from "../services/authServices";

class Logout extends React.Component {
  componentDidMount() {
    auth.logout();

    window.location = "/";
  }

  render() {
    return <div></div>;
  }
}

export default Logout;
