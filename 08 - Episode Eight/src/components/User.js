import { useState } from "react";

const User = () => {
  const { count, setCount } = useState(0);
  const { age, setAge } = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Age: {age}</h1>
      <h2>Name: Jadid</h2>
      <h3>Location: Dhaka</h3>
      <h4>Contact: @fahimaljadid</h4>
    </div>
  );
};

export default User;
