import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      age: 18,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { count, age } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Age: {age}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
