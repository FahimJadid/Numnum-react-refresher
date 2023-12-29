// import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component Did mount");
  }

  render() {
    // console.log("parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is a about section</h2>
        <UserClass name={"Fahim"} location={"Dhaka"} />
      </div>
    );
  }
}

export default About;
